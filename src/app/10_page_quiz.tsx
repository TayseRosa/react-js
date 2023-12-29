"use client"

import { questions } from "@/data/questions";
import { useState } from "react";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [showResult, setShowResult] = useState(false)
  
  const title = 'Quiz de culinária';

  const loadNextQuestion = () => {
    if( questions[currentQuestion + 1] ){
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowResult(true)
    }
  }

  const handleAnswered = ( answer:number ) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      
      <div className="w-full max-w-xl rounded rounded-xl bg-white text-black shadow shadow-black">
        
        <div className="p-5 font-bold text-2-xl border border-gray-300"> {title} </div>

        {!showResult &&

        <div className="px-5"> 
          <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        }
        {showResult &&
          <Results questions={questions} answers={answers} />
        }

        <div className="p-5 text-center border-t border-gray-300"> 
        {!showResult &&
          `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's' }`
        }

        {showResult &&
          <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-700 text-white">Reiniciar quiz</button>
        }
          
        </div>

        <div className="flex justify-center mt-10 mb-10 mx-4 text-2xl text-purple-400"> 
          <a href="https://www.github.com/tayserosa" target="_blank"> 
            Developed with 💜 by  Tayse Rosa
          </a> 
        </div>
      </div>
    </div>
  );
}

export default Page;