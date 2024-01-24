import React, { useEffect } from 'react'
import "./style.css"
import API from "../../utils/API"

function Homepage() {
  useEffect(()=>{
    API.getAllAnswers().then(answerData=>{
      console.log(answerData);
    }).catch(err=>{
      console.log(err)
    })
  })
    return (
      <header className="header">
        <h1>Welcome to Pictionar-eh</h1>
      </header>
    );
  }
  
  export default Homepage;
  