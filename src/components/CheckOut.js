import React, { useContext } from "react";
import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { db } from "../utils/firebase";
import Form from "../components/Form";
import { OrderContext } from "../context/OrderContext";

const CheckOut = ({ items, cancel, clear }) => {
  const { enqueueSnackbar } = useSnackbar();

  const values = useContext(OrderContext);
  const { setOrders } = values;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const regitrar = ({ name, email, phone }) => {
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
    <Form onSubmit={handleSubmit(regitrar)}>
      <Typography component="h1" variant="h6">
        Complete registration for shopping
      </Typography>
      <List>
        <ListItem>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                id="name"
                fullWidth
                label="FullName"
                variant="outlined"
                autoFocus={true}
                inputProps={{ type: "name" }}
                error={Boolean(errors.name)}
                helperText={
                  errors.name
                    ? errors.name.type === "minLength"
                      ? "Full name length is more than 2"
                      : "Full name is required"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                id="phone"
                variant="outlined"
                label="phone"
                inputProps={{ type: "phone" }}
                error={Boolean(errors.phone)}
                helperText={errors.phone ? "Full phone is required" : ""}
                fullWidth
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            render={({ field }) => (
              <TextField
                id="email"
                variant="outlined"
                label="Email"
                inputProps={{ type: "email" }}
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === "pattern"
                      ? "Email is not valid"
                      : "Email is required"
                    : ""
                }
                fullWidth
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Button
            type="submit"
            variant="contained"
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
