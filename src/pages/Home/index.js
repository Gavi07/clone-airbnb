import React from 'react';
import { Title } from '../../components/Title';
import { Ranking } from './components/Ranking'
import { FramePage } from '../FramePage';
import { ListItem } from './components/ListItem';

export const HomePage = () => (
    <FramePage>
        <Title label="Top 5" />
        <Ranking />
        <Title label="Lista" />
        <ListItem />
    </FramePage>
)