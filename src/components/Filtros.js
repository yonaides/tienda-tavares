import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Typography, Container, Link } from "@mui/material";
import api from "../utils/api";

const Filtros = () => {
  const [datos, setDatos] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function obtenerDatos() {
      api
        .getItems()
        .then((response) => {
          setDatos(response);
          setLoading(false);
          getCategories(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    obtenerDatos();
  }, []);

  function getCategories(data) {
    var allCategories = data.map(function (item) {
      return item.category;
    });

    let onlyCategories = allCategories.filter((c, index) => {
      return allCategories.indexOf(c) === index;
    });

    setCategories(onlyCategories);
  }

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
        marginTop: "15px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        {categories &&
          categories.length > 0 &&
          categories.map((category) => (
            <Link
              component={ReactLink}
              to={`/filtros/${category}`}
              underline="hover"
              key={category}
            >
              <Typography
                sx={{
                  minWidth: 100,
                  textTransform: "capitalize",
                  marginLeft: "30px",
                  fontWeight: "bold",
                  display: { xs: "none", md: "block" },
                  color: "#2E3B55",
                }}
                variant="h6"
                href={`/filtros/${category}`}
              >
                {category}
              </Typography>
            </Link>
          ))}
      </Box>
    </Container>
  );
};

export default Filtros;
