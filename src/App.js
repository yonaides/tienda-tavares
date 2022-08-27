import "./App.css";
import Container from "@mui/material/Container";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <ItemListContainer greeting="Saludos" />
        <ItemCount/>
      </Container>
    </>
  );
}

export default App;
