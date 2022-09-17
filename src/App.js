import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./Home";
import ItemListContainer from "./components/ItemListContainer";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contactos from "./components/Contactos";
import Ofertas from "./components/Ofertas";
import Filtros from "./components/Filtros";
import CartContainer from "./components/CartContainer";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Filtros />
        <Container
          component="main"
          sx={{
            display: "flex",
            flexGrow: 1,
            marginTop: "15px",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="filtros/:category" element={<ItemListContainer />} />
            <Route path="/product">
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
