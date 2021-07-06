import React from "react";
import Routes from "./components/Routes";
import ShopContextProvider from "./contexts/ShopContext";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Routes />
      </ShopContextProvider>
    </div>
  );
};

export default App;
