import React from 'react';
import { Link } from 'react-router-dom';
import { Score } from '../../../components/Score';

export const Item = (props) => (
    <Link to={ `/detail/${props._id}` }>
        <article className="item">
            <img src={props.image} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.place}</p>
                <Score score={props.score} users={props.users}/>
            </div>
        </article>
        <br></br>
    </Link>
)