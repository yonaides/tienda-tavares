import React, { useState, useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ onAdd, stock, item }) => {
  const [quantity, setQuantity] = useState(1);
  const values = useContext(CartContext);
  const { productCartList } = values;

  const increaseCount = () => {
    if (quantity + 1 > stock) {
      alert("Cantidad mayor al stock");
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseCount = () => {
    if (quantity - 1 <= 0) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const productItems = productCartList.length;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack
          direction="row"
          justifyContent="space-between"
          mb={2}
          mt={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#FAFAFA",
          }}
        >
          <IconButton
            size="large"
            sx={{ color: "black" }}
            onClick={decreaseCount}
          >
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mt: "5px", fontWeight: "bold", color: "blue" }}>
            {quantity}
          </Typography>

          <IconButton
            size="large"
            sx={{ color: "black" }}
            onClick={increaseCount}
          >
            <AddIcon />
          </IconButton>
        </Stack>
        <Box
          sx={{
            display: "flex",
            height: "50px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ height: "50px", m: "4px" }}
            size="large"
            onClick={() => onAdd(item, quantity)}
          >
            Agregar al Carrito
          </Button>
          {productItems > 0 ? (
            <Button
              component={ReactLink}
              to="/cart"
              variant="contained"
              sx={{ height: "50px", textAlign: "center" }}
              size="large"
              color="secondary"
            >
              Completar Compra
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemCount;
