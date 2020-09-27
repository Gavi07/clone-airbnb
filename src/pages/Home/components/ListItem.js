import React, { useEffect, useState } from 'react';
import { requestHttp } from '../../../config/HttpRequest';
import { Item } from './Item';

export const ListItem = () => {

    const [listItem, setListItem] = useState([]);

    useEffect( () => {
        getAllListItem();
    }, []);

    const getAllListItem = async () => {
        try {
            const response = await requestHttp('get','/experiences');
            setListItem(response.experiences);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="listItem">
            {
                listItem.map( el => <Item key={el.id} { ...el } />)
            }
        </section>
    )
}