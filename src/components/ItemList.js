import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Item from "./Item";
import api from "../utils/api";

export default function ItemList() {
  const [datos, setDatos] = useState();

  useEffect(() => {
    function obtenerDatos() {
      api
        .getData()
        .then((response) => {
          setDatos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setTimeout(() => {
      obtenerDatos();
    }, "2000");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 5 }}>
        {datos &&
          datos.map((dato) => (
            <Grid item md={4} key={dato.id}>
              <Item item={dato} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
