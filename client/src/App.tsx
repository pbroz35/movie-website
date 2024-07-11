import "./App.css";
import NavBar from "./NavBar";
import CardContainer from "./CardContainer";
import { useState } from "react";

function App() {

  //typescript code here
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");



  return (
    <>
    {/* Navigation bar */}
      <NavBar data = {data} setData = {setData} search={search} setSearch={setSearch}></NavBar>

    {/* Card Container */}
     <CardContainer data = {data} ></CardContainer>
    
    

    </>
  );
}

export default App;
