import React from 'react';
import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#FE530C'
}

export const DetailPage = () => (
    <section className="page">
        <Title label="Parapente san felix"/>
        <CardDetail />
        <Button label="!Reserva Ahora¡" style={ buttonStyle } />
    </section>
)