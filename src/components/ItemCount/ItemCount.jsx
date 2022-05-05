import React, { useState } from 'react';
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    
    function handlePlusButton () {
        if (count< stock) {
            setCount(count + 1);
        }
    }

    function handleMinusButton () {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className='itemCount'>
            <div className='buttons'>
                <button onClick={() => handlePlusButton()}>
                    +
                </button>
                <p className='count'> {count} </p>
                <button onClick={() => handleMinusButton()}>
                    -
                </button>
            </div>
            <button onClick={()=> (count <= stock) && onAdd()}>Añadir al carrito</button>
        </div>
    );
}


export default ItemCount
