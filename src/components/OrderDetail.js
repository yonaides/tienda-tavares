import React, { useEffect, useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import api from "../utils/api";
import Detail from "./Detail";

const OrderDetail = () => {
  const [allOrders, setAllOrder] = useState();

  useEffect(() => {
    function obtenerDatos() {
      api
        .getOrders()
        .then((response) => {
          setAllOrder(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    obtenerDatos();
  }, []);

  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <TableContainer>
          <Table>
            <TableHead sx={{backgroundColor:'#FFE0B2'}}>
              <TableRow>
                <TableCell>Id Orden</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Total</TableCell>
                <TableCell align="right">Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders &&
                allOrders.map((item, index) => <Detail order={item} key={item.id}/>)}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OrderDetail;
