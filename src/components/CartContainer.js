import React, { useContext, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

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
  Modal,
  
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";
import { CartContext } from "../context/CartContext";
import numberWithCommas from "../utils/formatNumber";
import CheckOut from "./CheckOut";

const ClearButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  "&:hover": {
    backgroundColor: amber[700],
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { productCartList, removeItem, clearItems } = useContext(CartContext);

  const removeItemHandler = (id) => {
    removeItem(id);
  };

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
            xs={{ textDecoration: "none" }}
          >
            <Typography textAlign="center">
              Cart is empty. Go to Shopping
            </Typography>
          </Link>
        </Box>
      ) : (
        <Grid container spacing={4}>
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
                    Total $ (
                    {productCartList.reduce((a, c) => a + c.quantity, 0)} items)
                    =
                    {numberWithCommas(
                      productCartList
                        .reduce((a, c) => a + c.quantity * c.price, 0)
                        .toFixed(2)
                    )}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                    <ShoppingCartCheckoutIcon sx={{ marginLeft: "15px" }} />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <CheckOut
                        items={productCartList}
                        cancel={handleClose}
                        clear={clearAllItem}
                      />
                    </Box>
                  </Modal>
                </ListItem>
                <ListItem>
                  <ClearButton
                    onClick={clearAllItem}
                    variant="contained"
                    fullWidth
                  >
                    Clear Cart
                    <ClearIcon sx={{ marginLeft: "15px" }} />
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
