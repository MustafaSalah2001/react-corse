import React from "react";

// 1. جعلنا أول حرف كابيتال (Cards)
// 2. استقبلنا عنصر واحد مفرد (product)
const Cards = ({ product }) => {
  return (
    <div>
      <h2>title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <span>Price: ${product.price}</span>
    </div>
  );
};

export default Cards;