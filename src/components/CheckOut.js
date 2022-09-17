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
            variant="outlined"
            fullWidth
            id="name"
            label="Name"
            inputProps={{ type: "name" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
            inputProps={{ type: "email" }}
          ></TextField>
        </ListItem>
        <ListItem>
          
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
          
              ></TextField>
          
        </ListItem>
        <ListItem>
          
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                inputProps={{ type: "password" }}
                
              ></TextField>
            
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Register
          </Button>
        </ListItem>
        <ListItem>
          
         
        </ListItem>
      </List>
    </Form>
  );
};

export default CheckOut;
