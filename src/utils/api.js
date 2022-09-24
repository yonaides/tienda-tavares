/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

import { db } from "./firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

export default {
  getData: async () => {
    const query = collection(db, "items");
    const response = await getDocs(query);

    let allProduct = [];
    response.forEach((doc) => {
      allProduct.push({ ...doc.data(), id: doc.id });
    });

    return allProduct;
  },
  getItemDetail: async (id) => {
    const query = doc(db, "items", id);
    const response = await getDoc(query);

    const singleProduct = {
      ...response.data(),
      id: response.id,
    };
    
    return singleProduct;
  },

  /*axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    }),*/

  getFilterData: (category) =>
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/category/${category}`,
    }),
};
