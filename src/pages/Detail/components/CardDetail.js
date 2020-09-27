import React from 'react';

export const CardDetail = (props) => (
    <article className="card-detail">
        <img src={props.image} />
        <p>
            {props.description}
        </p>
    </article>
)