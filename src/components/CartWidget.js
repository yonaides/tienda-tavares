import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import Box from "@mui/material/Box";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Link from "@mui/material/Link";
import { CartContext } from "../context/CartContext";
import { Badge } from "@mui/material";

export default function CartWidget() {
  const values = useContext(CartContext);
  const { productCartList } = values;

  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        <Link
          component={ReactLink}
          to="/cart"
          color="white"
          underline="none"
          xs={{ textDecoration: "none" }}
        >
          <Badge color="secondary" badgeContent={productCartList.length}>
            <LocalGroceryStoreIcon />
          </Badge>
        </Link>
      </Box>
    
  );
}
