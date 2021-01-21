import React from 'react';
import Button from './Button';

export default function Functions({ onContentClear, onDelete }) {
    return(
        <section className="functions">
            <Button text={"clear"} clickHandler={onContentClear}/>
            <Button text={"&larr"} clickHandler={onDelete}/>
        </section>
    )
}