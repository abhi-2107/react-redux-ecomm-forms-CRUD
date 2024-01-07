import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watches from "./features/watches/Watches";
import Counter from "./features/counter/Counter"
import Login from "./components/Login";

function App() {
  const [login,setLogin] = useState(false);

  return (
    <div className=" bg-light">
      <BrowserRouter>
      {login ? <></> : <Navbar login={() =>setLogin(true)}/>  }
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/watches" element={<Watches/>}></Route>
        <Route path="/counter" element= {<Counter/>}></Route>
        <Route path="/logIn" element= {<Login home = {() => setLogin(false)}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
