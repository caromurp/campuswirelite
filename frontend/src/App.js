import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react"
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const isLoggedInFunction = async () => {}
  return (
    <div>
      <Home isLoggedIn={isLoggedIn}/>
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home isLoggedIn={isLoggedIn}/>
    //     </Route>
    //     <Route path="/signup">
    //       <Signup />
    //     </Route>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //   </Switch>
    // </Router>
  )
}

export default App
