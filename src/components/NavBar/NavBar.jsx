import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div>
            <ul className='nav'>
                <a classname= 'productos' href="#">Buzos</a>
                <a classname= 'productos' href="#">Remeras</a>
                <h1 className= 'nombre'>OGPOPPA</h1>
                <a classname= 'productos' href="#">Zapatillas</a>
                <a classname= 'productos' href="#">Gorras</a>
                <CartWidget/>
            </ul>
        </div>
    );
}

export default NavBar;
