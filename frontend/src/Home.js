import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Question from './Question'

const getQuestions = async (setQuestions, setCurrQuestion) => {
  const qs = await axios.get('/api/', {})
  console.log(`qs: ${qs}`)
  const qsList = qs.questions
  console.log(`qsList: ${qsList}`)
  setQuestions(qsList)
  setCurrQuestion(qsList[0])
}

const Home = ({ isLoggedIn }) => {
  const [questions, setQuestions] = useState([{}])
  const [currQuestion, setCurrQuestion] = useState({})
  const [show, setShow] = useState(false)
  const [askedQuestion, setAskedQuestion] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSubmit = () => {}
  const handleChange = e => {
    const { target } = e
    const { value } = target
    setAskedQuestion(value)
  }

  // const getQuestions = async () => {
  //   const qs = await axios.get('/api/', {})
  //   console.log(`qs: ${qs}`)
  //   const qsList = qs.questions
  //   console.log(`qsList: ${qsList}`)
  //   setQuestions(qsList)
  //   setCurrQuestion(qsList[0])
  // }

  useEffect(() => {
    getQuestions(setQuestions(), setCurrQuestion())
  }, [])

  console.log(typeof (questions))
  console.log(`questions: ${questions}`)

  return (
    <Router>
      <div>
        <h1>Campuswire Lite</h1>
        {isLoggedIn ? (
          <div>
            <Button variant="primary" onClick={handleShow}>
              Ask a question +
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Ask a question!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="modalInputName"
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <button type="button">
                    Save
                  </button>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>Ask</Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <Link>Login to submit or answer a question!</Link>
        )}
        <div>
          {getQuestions().then(questions.forEach(q => (
            <li>{q.questionText}</li>
          )))}
        </div>
        <div>
          <Question isLoggedIn={isLoggedIn} question={currQuestion}></Question>
        </div>
      </div>
    </Router>
  )
}


export default Home
