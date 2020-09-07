import React, { Fragment } from 'react';
import { Topbar } from '../components/Topbar';

export const FramePage = ({ children }) => (
    <Fragment>
        <Topbar />
        { children }
    </Fragment>
)