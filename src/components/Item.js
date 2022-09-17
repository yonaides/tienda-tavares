import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { CardActionArea, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={{ pathname: "/product/" + item.id }}>
        <CardMedia
          component="img"
          height="310"
          width="150"
          image={item.image}
          alt={item.title}
        />
      </CardActionArea>
      <CardContent sx={{ backgroundColor: "#ECEFF1" }}>
        <CardActionArea
          component={Link}
          to={{ pathname: "/product/" + item.id }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: 300,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.title}
          </Typography>
          <Stack direction="row" spacing={2} mb={2}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Price
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "blue", fontSize: "20px" }}
            >
              $ {item.price}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              width: 300,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.description}
          </Typography>
        </CardActionArea>
      </CardContent>

      <Button
        component={Link}
        sx={{ display: "flex", marginTop: 1 }}
        to={{ pathname: "/product/" + item.id }}
        color="primary"
        size="large"
        variant="outlined"
      >
        View
      </Button>
    </Card>
  );
};

export default Item;
