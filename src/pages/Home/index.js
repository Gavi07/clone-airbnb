import React from 'react';
import { Topbar } from './Component/Topbar';
import { Title } from './Component/Title';

export const HomePage = () => (
    <section>
        <Topbar />
        <Title label="Top 5" />
        <Title label="Top 7" />
    </section>
)