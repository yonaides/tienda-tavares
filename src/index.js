import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import CartProvider from "./context/CartContext";
import OrderProvider from "./context/OrderContext";
import { appTheme } from "./utils/theme";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <CartProvider>
        <OrderProvider>
          <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <App />
          </ThemeProvider>
        </OrderProvider>
      </CartProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
