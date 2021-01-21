import React from 'react';
//import PropTypes from 'prop-types';
import Button from './Button';

export default function MathOperations({ onClickOperation, OnClickEqual }) {
    
    return (
        <section className="math-operations">
            <Button text={"+"} clickHandler={onClickOperation}/>
            <Button text={"-"} clickHandler={onClickOperation}/>
            <Button text={"*"} clickHandler={onClickOperation}/>
            <Button text={"/"} clickHandler={onClickOperation}/>
            <Button text={"="} clickHandler={OnClickEqual}/>
        </section>
    )
}

/*
MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isrequired,
    OnClickEqual: PropTypes.func.isrequired
}
*/
