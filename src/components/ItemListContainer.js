import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { category } = useParams();
  
  return <ItemList  category={category}/>;
}
