/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getData: () =>
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      
    }),
    getItemDetail: (id) => 
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    }),
};
