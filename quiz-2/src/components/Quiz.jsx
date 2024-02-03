import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Quiz.css";
import questions from "./quizQuestion.json";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      userResponses: {}, // Store user responses
      currentQuestion: {},
      nextQuestion: {},
      prevQuestion: {},
      currentQuestionIndex: 0,
    };
  }

  componentDidMount() {
    this.displayQuestion(
      this.state.questions,
      this.state.currentQuestion,
      this.state.nextQuestion,
      this.state.prevQuestion
    );
  }

  displayQuestion = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    prevQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (this.state.questions.length !== 0) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      prevQuestion = questions[currentQuestionIndex - 1];

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
      });
    }
  };

  handleNextButtonClick = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestion(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.prevQuestion
          );
        }
      );
    }
  };

  handlePrevButtonClick = () => {
    if (this.state.prevQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestion(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.prevQuestion
          );
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  handleFinishButtonClick = () => {
    // You can add logic to handle finishing the quiz and submitting user responses
  };

  handleOptionClick = (response) => {
    const { currentQuestion } = this.state;

    // Check if the clicked option is correct
    const isCorrect = response === currentQuestion.correctOption;

    // Show alert only for wrong answers
    if (!isCorrect) {
      alert("Wrong Answer!");
    }

    // Save user response
    this.setState((prevState) => ({
      userResponses: {
        ...prevState.userResponses,
        [prevState.currentQuestion.question]: response,
      },
    }));

    // Move to the next question or perform other actions
    this.handleNextButtonClick();
  };

  render() {
    const { currentQuestion, currentQuestionIndex, questions } = this.state;

    return (
      <div id="questions">
        <h2>Question</h2>

        <div>
          <span>{`${currentQuestionIndex + 1} of ${questions.length}`}</span>
          <h5>{currentQuestion.question}</h5>
        </div>

        <div className="option-container">
          <p className="option" onClick={() => this.handleOptionClick(currentQuestion.optionA)}>
            {currentQuestion.optionA}
          </p>
          <p className="option" onClick={() => this.handleOptionClick(currentQuestion.optionB)}>
            {currentQuestion.optionB}
          </p>
        </div>

        <div className="option-container">
          <p className="option" onClick={() => this.handleOptionClick(currentQuestion.optionC)}>
            {currentQuestion.optionC}
          </p>
          <p className="option" onClick={() => this.handleOptionClick(currentQuestion.optionD)}>
            {currentQuestion.optionD}
          </p>
        </div>

        <div className="button-container">
          <button className="previous button" onClick={this.handlePrevButtonClick}>
            Previous
          </button>
          <button className="next button" onClick={this.handleNextButtonClick}>
            Next
          </button>
          <button className="quit button" onClick={this.handleQuitButtonClick}>
            Quit
          </button>

          {/* Finish button with Link to navigate to the result page */}
          <Link to="/result">
            <button className="finish button" onClick={this.handleFinishButtonClick}>
              Finish
            </button>
          </Link>
        </div>
      </div>
    );
  }
}



