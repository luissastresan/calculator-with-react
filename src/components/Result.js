import React from 'react';
import propTypes from 'prop-types';

export default function Result({ value = "0" } = {}) {
    console.log('Renderizado de Result');
    return (
        <div className ="result">
            { value }
        </div>
    )
}

Result.propTypes = {
    value: propTypes.string
}