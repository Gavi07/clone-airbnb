import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (props) => (
    <Link to={ `/detail/${props.id}` }>
        <article className="item">
            <img src={props.image} />
            <div>
                <h2>{props.description}</h2>
                <p>{props.place}</p>
            </div>
        </article>
        <br></br>
    </Link>
)