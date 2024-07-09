import React, { useState } from 'react';

// Define your questions and answer options

  const questions = [
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "Romeo and Juliet"?',
      answerOptions: [
        { answerText: 'Charles Dickens', isCorrect: false },
        { answerText: 'Leo Tolstoy', isCorrect: false },
        { answerText: 'William Shakespeare', isCorrect: true },
        { answerText: 'Mark Twain', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the boiling point of water at sea level?',
      answerOptions: [
        { answerText: '90°C', isCorrect: false },
        { answerText: '100°C', isCorrect: true },
        { answerText: '110°C', isCorrect: false },
        { answerText: '120°C', isCorrect: false },
      ],
    },
    {
      questionText: 'Which element has the chemical symbol O?',
      answerOptions: [
        { answerText: 'Gold', isCorrect: false },
        { answerText: 'Oxygen', isCorrect: true },
        { answerText: 'Silver', isCorrect: false },
        { answerText: 'Iron', isCorrect: false },
      ],
    },
    {
      questionText: 'Who was the first president of the United States?',
      answerOptions: [
        { answerText: 'Thomas Jefferson', isCorrect: false },
        { answerText: 'Abraham Lincoln', isCorrect: false },
        { answerText: 'George Washington', isCorrect: true },
        { answerText: 'John Adams', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Japan?',
      answerOptions: [
        { answerText: 'Seoul', isCorrect: false },
        { answerText: 'Beijing', isCorrect: false },
        { answerText: 'Tokyo', isCorrect: true },
        { answerText: 'Bangkok', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the square root of 16?',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: true },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: 'Which ocean is the largest?',
      answerOptions: [
        { answerText: 'Atlantic Ocean', isCorrect: false },
        { answerText: 'Indian Ocean', isCorrect: false },
        { answerText: 'Arctic Ocean', isCorrect: false },
        { answerText: 'Pacific Ocean', isCorrect: true },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Claude Monet', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the primary language spoken in Brazil?',
      answerOptions: [
        { answerText: 'Spanish', isCorrect: false },
        { answerText: 'Portuguese', isCorrect: true },
        { answerText: 'French', isCorrect: false },
        { answerText: 'English', isCorrect: false },
      ],
    }
  ];
  
  
// Main App component
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Function to handle click on answer option
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Increase score if answer is correct
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); // Move to next question
    } else {
      setShowScore(true); // Show score if all questions are answered
    }
  };

  return (
    <div className="app">
      {showScore ? (
        // Render score section if showScore is true
        <ScoreSection score={score} questionsLength={questions.length} />
      ) : (
        // Render question section if showScore is false
        <QuestionSection
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

// ScoreSection component to display score
const ScoreSection = ({ score, questionsLength }) => {
  return (
    <div className="score-section">
      <div className="score-text">
        You scored {score} out of {questionsLength}
      </div>
      <div className="middle-score">
        <div className="score-circle">{score}</div> {/* Display score in a circle */}
      </div>
    </div>
  );
};

// QuestionSection component to display current question and answer options
const QuestionSection = ({ currentQuestion, questions, handleAnswerOptionClick }) => {
  const question = questions[currentQuestion]; // Get current question object
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      </div>
      <div className="question-text">{question.questionText}</div>
      <div className="answer-section">
        {/* Map through answer options and render buttons */}
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;