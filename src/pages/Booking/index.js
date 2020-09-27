import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom';
import { requestHttp } from '../../config/HttpRequest';

export const BookingPage = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('123');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [isValidForm, setIsValidForm] = useState('');

    const bookingHandler = (e) => {
        e.preventDefault();
        requestBooking();
        // alert('Formulario enviado con: ');
    }

    const [booking, setBooking] = useState([]);

    const requestBooking = async () => {
        const body = {
            id,
            name,
            phone,
            email_address: email,
            date
        }
        console.log('body', body);
        try {
            const response = await requestHttp('post', '/booking', body);
            setBooking(response.resBooking);
            console.log('Formulario enviado con: ', booking);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect( () => {
        // console.log('Alguna varibale fue modificada...');
        // OPTION 1
        // let formValid = false;
        // if (name !== ''
        //     && phone !== ''
        //     && email !== ''
        //     && date !== ''
        // ) {
        //     formValid = true;
        // }
        // setIsValidForm(formValid);

        // OPTION 2
        setIsValidForm(name !== '' && phone !== '' && email !== '' && date !== '');
    }, [name, phone, email, date]);

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={name} onChange= {e => setName(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Telefono:</label>
                    <input value={phone} onChange= {e => setPhone(e.target.value)}  type="tel" />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={email} onChange= {e => setEmail(e.target.value)}  type="email" />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={date} onChange= {e => setDate(e.target.value)}  type="date" />
                </div>
                <Button disabled={!isValidForm} type="submit" label="Reserva ahora" />
            </form>            
        </FramePage>
    )
}