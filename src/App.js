import React from "react";
import Routes from "./components/Routes";
import ShopContextProvider from "./contexts/ShopContext";

// Material-UI import
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <Container>
      <ShopContextProvider>
        <Routes />
      </ShopContextProvider>
    </Container>
  );
};

export default App;
