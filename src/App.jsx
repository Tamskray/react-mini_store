import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";

import { useProducts } from "./hooks/useSort";
import { useFetching } from "./hooks/useFetching";
import Loader from "./components/UI/Loader";
import SortFilter from "./components/SortFilter";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";
import FavoriteProductsIcon from "./components/FavoriteProductsIcon";
import Header from "./components/Header";
import ModalFavorites from "./components/ModalFavorites";

const portal = document.getElementById("portal");

function App() {
  const [products, setProducts] = useState([]);
  const [fetchProducts, isProductLoading, productError] = useFetching(
    async () => {
      const products = await axios.get("https://fakestoreapi.com/products/");
      setProducts(products.data);
    }
  );
  const [filter, setFilter] = useState({
    selectedSort: "",
    searchQuery: "",
    category: {},
  });
  const sortedAndSearchedProducts = useProducts(
    products,
    filter.selectedSort,
    filter.searchQuery,
    filter.category
  );
  const [favoriteProducts, setFavoriteProduct] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [modalFavorites, setModalFavorites] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const addFavoriteProduct = (newFavoriteProduct) => {
    const newFavoriteProductStorage = [...favoriteProducts, newFavoriteProduct];
    setFavoriteProduct(newFavoriteProductStorage);
    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavoriteProductStorage)
    );
  };

  const removeFavoriteProduct = (favoriteProduct) => {
    const newFavoriteProductStorage = favoriteProducts.filter(
      (product) => product.id !== favoriteProduct.id
    );
    setFavoriteProduct(newFavoriteProductStorage);
    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavoriteProductStorage)
    );
  };

  const AddToCartHandler = () => {
    setAddToCart(true);
    const timer = setTimeout(() => setAddToCart(false), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {addToCart && <BuyNotification text="Added to cart" />}
      <Header>
        <SearchProduct filter={filter} setFilter={setFilter} />
        <FavoriteProductsIcon
          favoriteProducts={favoriteProducts}
          modalFavorites={modalFavorites}
          setModalFavorites={setModalFavorites}
        />
      </Header>

      <ModalFavorites
        favoriteProducts={favoriteProducts}
        modalFavorites={modalFavorites}
      />

      <h2>Products</h2>

      <hr style={{ width: "50%" }} />
      <SortFilter filter={filter} setFilter={setFilter} />
      {productError && <h1>{productError}</h1>}
      {isProductLoading ? (
        <Loader />
      ) : (
        <ProductList
          products={sortedAndSearchedProducts}
          addFavoriteProduct={addFavoriteProduct}
          removeFavoriteProduct={removeFavoriteProduct}
          favoriteProducts={favoriteProducts}
          AddToCartHandler={AddToCartHandler}
        />
      )}
    </>
  );
}

const BuyNotification = ({ text }) => {
  // const [showNotif, setShowNotif] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowNotif(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // return ReactDOM.createPortal(
  //   showNotif && (
  //     <div className="notification-cart">
  //       <p>{text}</p>
  //     </div>
  //   ),
  //   portal
  // );
  return ReactDOM.createPortal(
    <div className="notification-cart">
      <p>{text}</p>
    </div>,
    portal
  );
};

export default App;
