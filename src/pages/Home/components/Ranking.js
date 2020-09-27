import React, { useEffect, useState } from 'react';
import { requestHttp } from '../../../config/HttpRequest';
import { Card } from './Card';

export const Ranking = () => {

    const [ranking, setRanking] = useState([]);

    useEffect( () => {
        getAllRanking();
    }, []);

    const getAllRanking = async () => {
        try {
            const response = await requestHttp('get','/experiences/top5');
            setRanking(response.top5);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="ranking">
            {
                ranking.map( el => <Card key={ el.id } { ...el } /> )
                // posts.map( el => <Card key={el.id} image={el.image} description={el.description} place={el.place} /> )
                // posts.map( (el, key) => <Card key={key} image={el.image} description={el.description} place={el.place} /> )
            }
        </section>
    )
}