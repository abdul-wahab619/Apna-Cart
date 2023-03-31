import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}key={i} increamentQuantity={props.increamentQuantity}index={i} decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Exists </h1>
  );
}
