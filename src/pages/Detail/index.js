import React from 'react';
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

    return (
        <FramePage>
            <Title label="Parapente san felix"/>
            <CardDetail />
            <Button isLink={true} linkTo={`/booking/${id}`} label="!Reserva Ahora¡" style={ buttonStyle } />
        </FramePage>
    );
}