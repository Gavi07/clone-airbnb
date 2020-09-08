import React, { Fragment } from 'react';
import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#FE530C'
}

export const DetailPage = () => (
    <FramePage>
        <Title label="Parapente san felix"/>
        <CardDetail />
        <Button label="!Reserva Ahora¡" style={ buttonStyle } />
    </FramePage>
)