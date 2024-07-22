// src/App.js
import React from "react";
import { Navbar, Footer } from "./components";
import styles from "./style";
import AppRouter from "./router/router";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Define paths where Navbar and Footer should be hidden
  const hiddenPaths = ["/", "/login", "/register", "*"];
  // Include paths that should always show the Navbar and Footer, e.g., "/404" if it were a defined path
  const alwaysShowPaths = [""];

  // Determine if the current path is hidden
  const isHiddenPage = hiddenPaths.includes(location.pathname);
  // Optionally include logic for always showing Navbar and Footer on specific paths
  const isAlwaysShowPage = alwaysShowPaths.includes(location.pathname);

  return (
    <div className="bg-primary w-full overflow-hidden">
      {!isHiddenPage || isAlwaysShowPage ? (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      ) : null}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AppRouter />
        </div>
      </div>
      {!isHiddenPage || isAlwaysShowPage ? (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
