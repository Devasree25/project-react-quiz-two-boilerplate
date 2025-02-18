import React from "react";
import { Link } from "react-router-dom";
import "../css/Result.css";

export default function Result() {
  return (
    <div className="resultpge">
      <h1>Result</h1>
      <div className="scores">
        <h3>You need more practice!</h3>
        <h1 className="score">Your score is 20%</h1>
        <div className="box">
          <div className="details">
            <h5>Total number of questions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div className="number">
            <h5>15</h5>
            <h5>9</h5>
            <h5>3</h5>
            <h5>6</h5>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Link to="/quiz">
          <button className="playagain">Play Again</button>
        </Link>
        <Link to="/">
          <button className="gohome">Back to home</button>
        </Link>
      </div>
    </div>
  );
}
