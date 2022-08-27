import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(1);
  const stock = 10;

  const add = () => {
    if (quantity + 1 > stock) {
      alert("Cantidad mayor al stock");
      return;
    }
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity - 1 <= 0) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.pinimg.com/564x/aa/45/04/aa4504d74ef57e74e501cea32771766a.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "#ECEFF1" }}>
        <Typography gutterBottom variant="h5" component="div">
          T-shirt
        </Typography>
        <Stack direction="row" spacing={2} mb={2}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Price
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "blue", fontSize: "20px" }}
          >
            $ 3.5
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          mb={2}
          mt={2}
          sx={{ backgroundColor: "white" }}
        >
          <IconButton size="med" sx={{ color: "black" }} onClick={remove}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mt: "5px", fontWeight: "bold", color: "blue" }}>
            {" "}
            {quantity}
          </Typography>

          <IconButton size="med" sx={{ color: "black" }} onClick={add}>
            <AddIcon />
          </IconButton>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ width: "100%", m: "3px" }}
          size="large"
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCount;
