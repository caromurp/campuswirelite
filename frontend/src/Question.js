import React, { useState } from 'react'
import axios from 'axios'

const Question = ({ isLoggedIn, question}) => {
  const [_id, setId] = useState(question._id)
  const [answer, setAnswer] = useState('')

  const answerQuestion = async () => {
    await axios.post('/api/answer', { _id, answer })
  }

  return (
    <div>
      <h1>{question.questionText}</h1>
      <h2>Author: {question.author}</h2>
      <h2>Answer: {question.answer}</h2>
      {isLoggedIn && (
        <div>
          <input placeholder="Answer this question" onChange={e => setAnswer(e.target.value)}></input>
          <button onClick={() => answerQuestion(_id, answer)}></button>
        </div>
      )}
    </div>
  )
}

export default Question
