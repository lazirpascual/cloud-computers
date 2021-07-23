import React from "react";
import Routes from "./components/Routes";
import ShopContextProvider from "./contexts/ShopContext";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";

// Material-UI import
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#778899",
    },
    secondary: {
      main: "#006400",
    },
  },
  typography: {
    h6: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <ShopContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <ThemeProvider theme={theme}>
                <Routes />
              </ThemeProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </ShopContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
