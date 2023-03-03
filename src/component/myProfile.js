
import { useState } from 'react';
let I = {}
I.am = "a FullSatck Developer";
I.studied = "Software Development ";
I.workwith = " Angular,React, Node, JavaScript,TypeScript,Html ,CSS, AWS and more ...";
function Myprofile() {
    const [result, setResult] = useState("Introduction")
    return <div className="App">
        <div><h1>{result}</h1>
            {<ul> {Object.keys(I).map(key => (<li key={key}> {key}: {I[key]}</li>))}</ul>}</div>)}
        <hr />
    </div>
}
export default Myprofile;