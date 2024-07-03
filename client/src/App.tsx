import "./App.css";
import NavBar from "./NavBar";
import CardContainer from "./CardContainer";
import { useState } from "react";

function App() {

  //typescript code here
  const [data, setData] = useState([]);


  return (
    <>
    {/* Navigation bar */}
      <NavBar data = {data} setData = {setData}></NavBar>

    {/* Card Container */}
      <CardContainer data = {data} ></CardContainer>


    </>
  );
}

export default App;
