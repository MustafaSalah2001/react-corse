import { Fragment } from "react";
import { useState } from "react";

const App = () => {
  
  //const [input, setInput] = useState('mosalah');

  

  return (
    <>
      <h1>Hello</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
      placeholder="Enter your name" />
      <h1>my name is {input}</h1>
    
    </>
  );
};

export default App;