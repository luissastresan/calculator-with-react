import React, { useState } from 'react';
import Result from './components/Result';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';

var words = require('lodash.words');


export default function App() {

    const [result, setResult] = useState("");

    const item = words(result);
    console.log(item);

    return ( 
        <main className ="react-calculator">
            <Result 
                value={item[item.length -1]}
            />

            <Numbers 
                onClickNumber={number => setResult(`${result}${number}`)}
            />

            <Functions 
                onContentClear={() => setResult("")}
                onDelete={() => {
                    setResult(result.substring(0, result.length - 1));
                }}
            />

            <MathOperations 
                onClickOperation={operator => setResult(`${result} ${operator} `)} 
                OnClickEqual={() => {
                    const finalResult = eval(result);
                    setResult(finalResult.toString());
                }}
            />
        </main>
    )
}