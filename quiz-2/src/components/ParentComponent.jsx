// ParentComponent.js
import React from "react";
import QuizComponent from "./QuizComponent";

export default function ParentComponent() {
  const navigateToResult = () => {
    // Implement your navigation logic here
    console.log("Navigating to result page");
  };

  return <QuizComponent navigateToResult={navigateToResult} />;
}
