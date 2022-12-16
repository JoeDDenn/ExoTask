import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,Signup,Nav, Home } from "./componants/index";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/signup" exact element={<Signup/>} />
    <Route path="/login" exact element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App