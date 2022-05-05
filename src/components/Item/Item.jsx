import React from 'react';
import './Item.css'

function Item({ item }) {
    return (
        <div className='card'>
            <div className='titulo'>{item?.nombre}</div>
            <div className='content'>
                <div className='img-conteiner'>
                    <img className='product-img' src={item?.img} alt="Imagen de producto" />
                </div>
                <div className='price'>{item?.precio}</div>
            </div>
        </div>
    )
}

export default Item

