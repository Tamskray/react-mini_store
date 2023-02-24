import React, { useState } from "react";

import StarRaiting from "./UI/StarRaiting";
import FavoriteIcon from "./UI/FavoriteIcon";
import { SlBasket } from "react-icons/sl";

function ProductItem({
  product,
  addFavoriteProduct,
  removeFavoriteProduct,
  favoriteProducts,
  AddToCartHandler,
}) {
  const removeFavProduct = () => {
    removeFavoriteProduct(product);
  };

  return (
    <div className="card">
      <FavoriteIcon
        addFavoriteProduct={addFavoriteProduct}
        remove={removeFavProduct}
        product={product}
        favoriteProducts={favoriteProducts}
      />
      <img src={product.image} />
      <p>{product.title}</p>
      <p>
        <StarRaiting rateValue={product.rating.rate} />
      </p>
      <h1>{product.price} ₴</h1>
      <button onClick={AddToCartHandler}>
        <SlBasket className="basketIcon" />
      </button>
    </div>
  );
}

export default ProductItem;
