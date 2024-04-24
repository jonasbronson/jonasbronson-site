import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Video from "./pages/Video";
import Footer from "./Footer";
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
      <Footer />
    </>
  )
}

export default App;
