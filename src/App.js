import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import fire from "./fire";
import Chat from "./containers/chat";
import { TextField,Grid } from "@material-ui/core";
import NavBar from "./component/navbar";
import {useDispatch, useSelector} from "react-redux";
import MyCard from "./component/MyCard";
import MyCard2 from "./component/MyCard/app";


function App() {
 
  const counter = useSelector((state)=>state.counter)
  console.log(counter);

  return (
    <div >
      <NavBar />      
      <h1 style={{marginTop: 30, textAlign: "center"}}>My Home Page</h1><br />
      <div style={styles.content}>
        <Grid container justify="left">
          <Grid item xs={3}>
            <MyCard />
          </Grid>
        
          <Grid item xs={3}>
            <MyCard2 />
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}

const styles = {
  content: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    marginTop: 30,
    padding: 0,
    marginLeft: 30
  }
}

export default App;
