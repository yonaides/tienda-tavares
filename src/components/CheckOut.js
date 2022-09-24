import React from "react";
import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import { Link as ReactLink } from "react-router-dom";
import Form from "../components/Form";

const CheckOut = () => {
  return (
    <Form>
      <Typography component="h1" variant="h6">
        User Register
      </Typography>
      <List>
        <ListItem>
          <TextField
            id="fullname"
            variant="outlined"
            fullWidth
            label="FullName"
            inputProps={{ type: "fullname" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="address"
            label="Address"
            inputProps={{ type: "address" }}
          ></TextField>
        </ListItem>        
        <ListItem>
          <TextField
            id="city"
            variant="outlined"
            fullWidth
            label="City"
            inputProps={{ type: "city" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            id="codePostal"
            variant="outlined"
            fullWidth
            label="Code Postal"
            inputProps={{ type: "code" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            id="country"
            variant="outlined"
            fullWidth
            label="Country"
            inputProps={{ type: "country" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Register
          </Button>
        </ListItem>
        <ListItem></ListItem>
      </List>
    </Form>
  );
};

export default CheckOut;
