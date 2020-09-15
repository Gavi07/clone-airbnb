import React from 'react';
import { Link } from 'react-router-dom';

export const Button = (
    {
        label = 'Botón',
        type = 'button',
        style = {},
        isLink = false,
        linkTo ='/'
    }
) => (
    isLink 
        ? <Link className="button" style={style} to={linkTo}>{label}</Link>
        : <button className="button" style={ style } type={ type }>{ label }</button>
)