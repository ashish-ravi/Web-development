import React from "react";
import logo from './logo.svg';
import './App.css';
import fire from "./fire";
import Chat from "./containers/chat";

function App() {
  console.log(fire.database());

  return (
    <div>
      <Chat />
      
    </div>
  );
}

export default App;
