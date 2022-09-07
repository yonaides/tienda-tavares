import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Loading from "./Loading";
import api from "../utils/api";

function ItemDetail() {
  const { id } = useParams();
  const [dato, setDato] = useState();

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

  useEffect(() => {
    function obtenerDatos() {
      api
        .getItemDetail(id)
        .then((response) => {
          setDato(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setTimeout(() => {
      obtenerDatos();
    }, "2000");
  }, [id]);

  if (dato === undefined) {
    return <Loading/>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <ImageList>
          <ImageListItem cols={1}>
            <img
              src={dato.image}
              alt={dato.title}
              sx={{ height: 450, width: 450, objectFit: "cover" }}
            />
          </ImageListItem>
        </ImageList>
      </Grid>
      <Grid item md={4}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h4">
            {dato.title}
          </Typography>

          <Typography variant="body2" gutterBottom>
            {dato.description}
          </Typography>

          <Typography variant="h3" component="h3" sx={{ color: "blue" }}>
            US$ {dato.price}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          mb={2}
          mt={2}
          sx={{ backgroundColor: "#FAFAFA" }}
        >
          <IconButton size="large" sx={{ color: "black" }} onClick={remove}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mt: "5px", fontWeight: "bold", color: "blue" }}>
            {quantity}
          </Typography>

          <IconButton size="large" sx={{ color: "black" }} onClick={add}>
            <AddIcon />
          </IconButton>          
        </Stack>
        <Button
          variant="contained"
          sx={{ width: "100%", m: "3px"}}
          size="large"
        >
          Agregar al carrito
        </Button>
      </Grid>
    </Grid>
  );
}

export default ItemDetail;
