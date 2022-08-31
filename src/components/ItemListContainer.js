import Container from "@mui/material/Container";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  return (
    <Container component="main" sx={{ display: "flex", flexGrow: 1 , marginTop:'15px'}}>
      <ItemList />
    </Container>
  );
}
