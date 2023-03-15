import React from "react"
import { Route,Routes } from "react-router-dom";

import LogInPage from "./Form/LogInPage";
import SignUppage from "./Form/SignUppage";







function App() {


  const path = window.location.pathname;
  

  return (

    <div>

    <Routes>
            <Route index  element = {<LogInPage/>}/>
            <Route path="/signup/" element = {<SignUppage/>}/>
    </Routes>

    



    
    </div>
  )
}

export default App
