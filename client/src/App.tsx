import "./App.css";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {

  //typescript code here
  const [data, setData] = useState([]);


  return (
    <>
    {/* Navigation bar */}
      <NavBar data = {data} setData = {setData}></NavBar>

    </>
  );
}

export default App;
