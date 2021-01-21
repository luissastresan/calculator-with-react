import React from 'react';

export default function Button( { text, clickHandler} ) {
    return (
        <button onClick={() => clickHandler(text)}>
            <span>{text}</span>
        </button>
    )
}