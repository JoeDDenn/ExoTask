import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,Signup,Nav, Home,HomeWorkSpace} from "./componants/index";
import Bg from "./componants/WorkSpace/Main-workspace/bg/Bg";


const App = () => {
  return (
    <BrowserRouter>
    <Bg/>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/signup" exact element={<Signup/>} />
    <Route path="/login" exact element={<Login/>} />
    <Route path="/WorkSpace" exact element={<HomeWorkSpace/>} />
  
    </Routes>
    </BrowserRouter>
  )
}

export default App