/* eslint-disable import/no-anonymous-default-export */
import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  where,
  query,
} from "firebase/firestore";

export default {
  getOrders: async () => {
    const query = collection(db, "orders");
    const response = await getDocs(query);

    let allOrders = [];
    response.forEach((doc) => {
      allOrders.push({ ...doc.data(), id: doc.id });
    });    
    return allOrders;
  },
  getItems: async () => {
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

  getFilterData: async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category));

    const response = await getDocs(q);

    let filterProduct = [];
    response.forEach((doc) => {
      filterProduct.push({ ...doc.data(), id: doc.id });
    });

    return filterProduct;
  },
};
