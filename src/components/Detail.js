import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Typography,
  Link,
  IconButton,
  Table,
  TableHead,
  TableBody,
  Collapse,
  Box,
  Alert,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as ReactLink } from "react-router-dom";

const Detail = ({ order }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <Typography>{order.id}</Typography>
        </TableCell>
        <TableCell>{order.date}</TableCell>
        <TableCell>{order.total}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 30, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Alert severity="info">
                <Typography variant="h6" gutterBottom component="div">
                  Detail Items
                </Typography>
              </Alert>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>item</TableCell>
                    <TableCell>price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.items.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{order.buyer.name}</TableCell>                      
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">
                        {Math.round(item.quantity * item.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Detail;
