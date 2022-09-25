import React, { useState, useContext, useCallback } from "react";
import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { db } from "../utils/firebase";
import Form from "../components/Form";
import { OrderContext } from "../context/OrderContext";

const CheckOut = ({ items, cancel, clear }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const values = useContext(OrderContext);
  const { setOrders } = values;

  const regitrar = (event) => {
    event.preventDefault();

    const orders = {
      buyer: {
        name,
        email,
        phone,
      },
      items,
      total: items.reduce((a, c) => a + c.quantity * c.price, 0).toFixed(2),
      date: new Date().toString(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, orders).then((response) => {
      setOrders(response);
      enqueueSnackbar("Order complete", {
        autoHideDuration: 1000,
        variant: "success",
      });
      cancel();
      clear();
    });
  };

  
  return (
    <Form>
      <Typography component="h1" variant="h6">
        Complete shopping
      </Typography>
      <List>
        <ListItem>
          <TextField
            id="name"
            label="FullName"
            variant="outlined"
            fullWidth
            inputProps={{ type: "fullname" }}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            id="phone"
            variant="outlined"
            fullWidth
            label="phone"
            inputProps={{ type: "phone" }}
            onChange={(e) => setPhone(e.target.value)}
            autoFocus
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            id="email"
            variant="outlined"
            fullWidth
            label="Email"
            inputProps={{ type: "email" }}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </ListItem>
        <ListItem>
          <Button
            type="submit"
            variant="contained"
            onClick={regitrar}
            fullWidth
            color="primary"
            sx={{ mr: 5 }}
          >
            Complete
          </Button>
          <Button
            variant="contained"
            onClick={cancel}
            fullWidth
            color="secondary"
          >
            Cancel
          </Button>
        </ListItem>
        <ListItem></ListItem>
      </List>
    </Form>
  );
};

export default CheckOut;
