import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,Signup,Nav } from "./componants/index";
const App = () => {
  return (
    <BrowserRouter>
       <Nav/>

    <Routes>
    <Route path="/signup" exact element={<Signup/>} />
    <Route path="/login" exact element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App