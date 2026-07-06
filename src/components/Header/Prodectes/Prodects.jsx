import React from "react";
import Cards from "./Cards";

const Prodects = ({ prodects }) => {
  return (
    <div>
      {prodects.map((prodect, index) => (
        <Cards key={index} product={prodect} />
      ))}
    </div>
  );
};

export default Prodects;
