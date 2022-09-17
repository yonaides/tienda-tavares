import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import Box from "@mui/material/Box";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Link from "@mui/material/Link";
import { Badge } from "@mui/material";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const values = useContext(CartContext);
  const { productCartList } = values;

  const itemsCount = productCartList.reduce(
    (a, c) => (a + c.quantity ),
    0
  );
  
  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40px",
          fontWeight: "bold",
          
        }}
      >
        <Link
          component={ReactLink}
          to="/cart"
          color="white"
          underline="none"
          xs={{ textDecoration: "none" }}
        >
          <Badge color="secondary" badgeContent={ itemsCount} invisible = {itemsCount <= 0} >
            <LocalGroceryStoreIcon />
          </Badge>
        </Link>
      </Box>
    
  );
}
