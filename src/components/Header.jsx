import React from "react";

import cl from "./Header.module.css";

function Header({ children }) {
  return (
    <header className={cl.header}>
      <div className={cl.header__container}>
        <nav className={cl.header__nav}>
          <h1>Mini Store</h1>
          {children}
        </nav>
      </div>
    </header>
  );
}

export default Header;
