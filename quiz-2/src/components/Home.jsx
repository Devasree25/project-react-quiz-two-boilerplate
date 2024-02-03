import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    // Navigate to the quiz page
    navigate("/quiz");
  };

  return (
    <div className="homepge">
      <p className="title">Quiz App</p>
      <button className="home-button" onClick={handlePlayClick}>
        Play
      </button>
    </div>
  );
}
