import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header/Header";

const App = () => {
  const massge = "mustafa salah";
  return (
    <>
    <h1>{massge}</h1>
      <Header />
      <Form />
    </>
  );
};

export default App;