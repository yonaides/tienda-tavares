import "./App.css";
import Container from "@mui/material/Container";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <ItemListContainer greeting="Saludos" />
      </Container>
    </>
  );
}

export default App;
