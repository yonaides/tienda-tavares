import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";

/*import {db} from '../utils/firebase';
import {doc, getDoc} from 'firebase/firestore';
*/

import Item from "./Item";
import api from "../utils/api";
import Loading from "./Loading";

export default function ItemList({ category }) {
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function obtenerDatos() {
      if (category === undefined) {
        api
          .getData()
          .then((response) => {
            setDatos(response);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .getFilterData(category)
          .then((response) => {
            setDatos(response);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    obtenerDatos();
  }, [category]);

  if (loading === true) {
    return <Loading />;
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
