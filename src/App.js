/* eslint-disable no-unused-vars */

import './App.css';
import ButtonClick from './component/buttonclick';
import UsestateUsefect from './component/usetateanduseeffect';
import ReactForm from './component/ReacrForm'
import App1 from './component/ThinkInReact';
import Myprofile from './component/myProfile'
import { useState } from 'react';
let I = {}
I.am = "a FullSatck Developer";
I.studied = "Software Development ";
I.workwith = " Angular,React, Node, JavaScript,TypeScript,Html ,CSS, AWS and more ...";
function App() {
  const [result, setResult] = useState("Introduction")
  return <div className="App">
    <h1>
      React Atomic Design and Higher Order component implimentation.
    </h1>
    <Myprofile />
    <hr />
    progress bar
    <progress value={0.5} /> 0.5
    <progress value={75} max={100} /> 75/max100
    <progress value={1} />1
    <progress value={null} />null
    <div className='wrapper'>

      <ButtonClick />
      <ReactForm />

    </div>
    <div className='wrapper2'>
      <UsestateUsefect className="displaytable" /><span><App1 /></span></div>
  </div>
}

export default App