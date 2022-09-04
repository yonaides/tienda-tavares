import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import NavBar from "./components/NavBar";
import Home from "./Home";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Container
        component="main"
        sx={{ display: "flex", flexGrow: 1, marginTop: "15px" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itemDetailContainer">
              <Route path=":id" element={<ItemDetailContainer />}/>
            </Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
