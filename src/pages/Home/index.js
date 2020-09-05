import React from 'react';
import { Topbar } from './Component/Topbar';
import { Title } from './Component/Title';
import { Ranking } from './Component/Ranking';

export const HomePage = () => (
    <section className="page">
        <Topbar />
        <Title label="Top 5" />
        <Ranking />
        <Title label="Lista" />
    </section>
)