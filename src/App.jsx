import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,Signup, Home,HomeWorkSpace,CreateProjForum} from "./componants/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/signup" exact element={<Signup/>} />
    <Route path="/login" exact element={<Login/>} />
    <Route path="/WorkSpace" exact element={<HomeWorkSpace/>} />
    <Route path="/CreateProjForum" exact element={<CreateProjForum/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App