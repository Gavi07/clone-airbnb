import React from 'react';
import { Item } from './Item';
import { HomePage } from './pages/Home';

export const App = () => {
    return (
        <HomePage />
    )
}

// export const App = () => <p>Hola mundo React</p>; // con export se especifica que esta función es pública

// export const App = () => (
//     <div>
//         <h1>Titulo</h1>
//         <p>Hola mundo</p>
//     </div>
// )

const nombre = 'Yuri';
const nombres = [ 'Maria', 'Diego', 'Lucas', 'Mateo'];

// export const App = () => {
//     const sumar = (a, b) => {
//         return a + b;
//     }

//     return (
//         <div>
//             <h1>Titulo</h1>
//             <p>Hola mundo {nombre} </p>
//             <p>
//                 { 1 + 2 }
//             </p>
//             <ul>
//                 {
//                     nombres.map(el => <li>{el}</li>)
//                 }
//                 <li>Item 1</li>
//             </ul>
//             <ul>
//                 {
//                     nombres.map(el => <Item label = {el}></Item>)
//                 }
//             </ul>
//         </div>
//     )
// }
