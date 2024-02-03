import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}
