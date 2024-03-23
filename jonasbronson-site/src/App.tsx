import React from "react";
import './App.css';
import Home from "./pages/Home";
import Header from "./Header";
import Code from "./pages/Code";
import Video from "./pages/Video";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Code" element={<Code/>}/>
        <Route path="/Video" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App;
