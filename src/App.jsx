import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,Signup, Home,HomeWorkSpace,ProjectPage} from "./componants/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/signup" exact element={<Signup/>} />
    <Route path="/login" exact element={<Login/>} />
    <Route path="/WorkSpace" exact element={<HomeWorkSpace/>} />
    <Route path="/Project" exact element={<ProjectPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App