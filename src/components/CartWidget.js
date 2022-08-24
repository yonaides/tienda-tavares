import React from "react";
import Box from "@mui/material/Box";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export default function CartWidget() {
  return (
    <Box sx={{ backgroundColor: "#283593", width: "50px", height: "50px", display:{xs:'none', md:'flex'} }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        <LocalGroceryStoreIcon /> 4
      </Box>
    </Box>
  );
}
