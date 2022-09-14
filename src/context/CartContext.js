import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const addItem = (item, quantity) => {
    const newProduct = {
      ...item,
      quantity,
    };
    const newProductCartList = [...productCartList];
    newProductCartList.push(newProduct);

    setProductCartList(newProductCartList);
  };

  const removeItem = (itemId) => {
    const newProductCartList = productCartList.filter(
      (product) => product.id !== itemId
    );
    setProductCartList(newProductCartList);
  };

  const clearItems = () => {
    setProductCartList([]);
  };

  const updateItem = (item, quantity) => {
    //remove old item
    let newProductCartList = productCartList.filter(
      (product) => product.id !== item.id
    );

    //create new item with quatity
    const newProduct = {
      ...item,
      quantity,
    };
  
    //add ew item
    newProductCartList.push(newProduct);

    //update product cart list
    setProductCartList(newProductCartList);
  };

  const isInCart = (itemId) => {
    const productExists = productCartList.find((item) => item.id === itemId);
    
    if (productExists !== undefined) {
      
      return true;
    } else {
      console.log('false');
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        setProductCartList,
        addItem,
        removeItem,
        clearItems,
        updateItem,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
