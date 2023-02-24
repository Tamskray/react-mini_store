import React from "react";

import ProductItem from "./ProductItem";

function ProductList({
  products,
  addFavoriteProduct,
  removeFavoriteProduct,
  favoriteProducts,
  AddToCartHandler,
}) {
  if (!products.length) return <h1>No products found</h1>;

  return (
    <div className="container">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addFavoriteProduct={addFavoriteProduct}
          removeFavoriteProduct={removeFavoriteProduct}
          favoriteProducts={favoriteProducts}
          AddToCartHandler={AddToCartHandler}
        />
      ))}
    </div>
  );
}

export default ProductList;
