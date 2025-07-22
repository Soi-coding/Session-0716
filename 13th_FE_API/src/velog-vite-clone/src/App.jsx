import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Homepage from "./page/Homepage";
import PostDetailPage from "./page/PostDetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:postid" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
