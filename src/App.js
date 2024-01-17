import { useState } from 'react';
import './App.css';


export default function App(){
  return (
  <div className="App">
    <Flashcards />
  </div>
  )
}

const questions = [
  {
    id: 100,
    question: "What language is React based on ?",
    answer: "Javascript"
  },
  {
    id: 101,
    question: "What are the building blocks of React apps ?",
    answer: "Components"
  },
  {
    id: 103,
    question: "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 104,
    question: "How to pass data from parent to child components ?",
    answer: "Props"
  },
  {
    id: 105,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 106,
    question: "What do we call input element that is completely synchronised with state ?",
    answer: "Javascript"
  },
]


function Flashcards() {
  const [selectedId, setSelectedId] = useState(null)

  function handleClick (id) {
   setSelectedId(id)
  }

  return (
    <div className="flashcards">
       {questions.map((question) =>(
         <div 
           key={question.id}
           className={question.id === selectedId ? "selected" : ""}
           onClick={() => handleClick(question.id)}
           >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
         </div>
       ))}
    </div>
  )
}
