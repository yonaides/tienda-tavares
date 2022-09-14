import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = ({ onAdd, stock, item }) => {
  const [quantity, setQuantity] = useState(1);

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
        <Button
          variant="contained"
          sx={{ width: "100%", m: "3px" }}
          size="large"
          onClick={() => onAdd(item,quantity)}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default ItemCount;
