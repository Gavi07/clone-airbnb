import React,  { useEffect, useState } from 'react';
import { requestHttp } from '../../config/HttpRequest';
import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom';

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#FE530C'
}

export const DetailPage = () => {
    // hook
    let {id} = useParams();  

    const [detail, setDetail] = useState([]);

    useEffect( () => {
        getDetail();
    }, []); // solo entre una vez, vuelve a entrar si alguna de las variables que estan dentro de los corchotes cambia

    const getDetail = async () => {
        try {
            const response = await requestHttp('get',`/experiences/detail/${id}`);
            setDetail(response.experience);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <FramePage>
            <Title label={detail.title}/>
            <CardDetail image={detail.image} description={detail.description} />
            <Button isLink={true} linkTo={`/booking/${id}`} label="!Reserva Ahora¡" style={ buttonStyle } />
        </FramePage>
    );
}