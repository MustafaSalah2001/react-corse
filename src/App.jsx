import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Prodects from "./components/Header/Prodectes/Prodects";
import Header from "./components/Header/Header";
import Button from "./components/Button";
import { useState } from "react";
const App = () => {
    

  const prodects = [
    {
      title: "prodect1",
      description: "this is prodect1",
      price: 100,
    },
    {
      title: "prodect2",
      description: "this is prodect2",
      price: 200,
    },
    {
      title: "prodect3",
      description: "this is prodect3",
      price: 300,
    },
  ];

  return (
    <>
      <Button onClick={() => console.log("hi 1")}>
        <span>Click me</span>
      </Button>
      <Button onClick={() => console.log("hi 2")}>
        <span>Click me 2</span>
      </Button>
      <Header />
      <Form />
      <Prodects prodects={prodects} />
    </>
  );
};

export default App;
