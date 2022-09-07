import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Item from "./Item";
import api from "../utils/api";

export default function ItemList({ category }) {
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function obtenerDatos() {
      if (category === undefined) {
        api
          .getData()
          .then((response) => {
            setDatos(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .getFilterData(category)
          .then((response) => {
            setDatos(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    setTimeout(() => {
      obtenerDatos();
    }, "2000");
  }, [category]);

  if (loading === true) {
    return 'wait'
  }
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
