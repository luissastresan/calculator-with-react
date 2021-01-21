import React from 'react';
import Button from './Button';

export default function Numbers({ onClickNumber }) {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
   
    return(
        <section className="numbers">
            {
                numbersArray.map((number, index) => 
                    <Button key={index} text={number.toString()} clickHandler={onClickNumber}/>)
            }
        </section>
    )
}