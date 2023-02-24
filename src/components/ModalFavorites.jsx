import React from "react";

import cl from "./FavoriteProductsList.module.css";

function ModalFavorites({ favoriteProducts, modalFavorites }) {
  return (
    <>
      {modalFavorites && (
        <>
          <ul>
            {favoriteProducts.map((favoriteProduct) => (
              <li className={cl.favProduct} key={favoriteProduct.id}>
                <img className={cl.favImage} src={favoriteProduct.image} />
                <h2>{favoriteProduct.title}</h2>
                <div className={cl.price}>{favoriteProduct.price} ₴</div>
              </li>
            ))}
          </ul>
          <hr style={{ width: "70%" }} />
        </>
      )}
    </>
  );
}

export default ModalFavorites;
