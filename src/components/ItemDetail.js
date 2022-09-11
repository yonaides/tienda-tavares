import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ItemCount from "./ItemCount";
import Loading from "./Loading";
import api from "../utils/api";

function ItemDetail() {
  const { id } = useParams();
  const [dato, setDato] = useState();
  const [isCount, setCount] = useState(0);
  const stock = 10;

  const onAdd = (count) => {

    console.log(count);
    setCount(count);
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
    obtenerDatos();
  }, [id]);

  if (dato === undefined) {
    return <Loading />;
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
        <ItemCount onAdd ={onAdd} stock={stock} />
      </Grid>
    </Grid>
  );
}

export default ItemDetail;
