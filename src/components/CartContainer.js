import React, { useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import {
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import { CartContext } from "../context/CartContext";

const ClearButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  "&:hover": {
    backgroundColor: amber[700],
  },
}));

//agregar removeItem
//agregar clear
const CartContainer = () => {
  const { productCartList, removeItem, clearItems } = useContext(CartContext);

  const removeItemHandler = (id) => {
    removeItem(id);
  };

  const checkoutHandler = () => {};

  const clearAllItem = () => {
    clearItems();
  };

  return (
    <div>
      <Typography component="h1" variant="h6">
        Shopping Cart
      </Typography>
      {productCartList.length <= 0 ? (
        <Box>
          <Link
            component={ReactLink}
            to="/"
            color="black"
            underline="none"
            xs={{ textDecoration: "none" }}>
            <Typography textAlign="center">
              Cart is empty. Go to Shopping
            </Typography>
          </Link>
        </Box>
      ) : (
        <Grid container spacing={4} >
          <Grid item md={8} xs={12} p={10}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productCartList.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Link component={ReactLink} to={`/product/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></img>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          component={ReactLink}
                          to={`/product/${item.id}`}
                          underline="none"
                        >
                          <Typography>{item.title}</Typography>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{item.quantity}</Typography>
                      </TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item.id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h6">
                    Subtotal $ (
                    {productCartList.reduce((a, c) => a + c.quantity, 0)} items)
                    =
                    {productCartList.reduce(
                      (a, c) => (a + c.quantity * c.price),
                      0
                    ).toFixed(2)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={checkoutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                    
                  >
                    Check Out 
                    <ShoppingCartCheckoutIcon sx={{marginLeft:'15px'}}/>
                  </Button>
                </ListItem>
                <ListItem>
                  <ClearButton
                    onClick={clearAllItem}
                    variant="contained"
                    fullWidth
                  >
                    Clear Cart
                    <ClearIcon sx={{marginLeft:'15px'}}/>
                  </ClearButton>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default CartContainer;
