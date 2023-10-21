import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header';
function App() {

  const [a,setA]=useState(10)
  
  const changeMarks=()=>{
    setA(15)
  }
  

  return (
    <>
    <Header/>   
     <div className="App">
    <h1>my mark is {a}</h1>
     <button onClick={changeMarks}>
      update
     </button>

      
    </div>
    </>

  );
}

export default App;
