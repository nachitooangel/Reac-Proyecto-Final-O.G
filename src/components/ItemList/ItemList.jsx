import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import './ItemList.css'


function ItemList({ items }) {
    return (
        <div class='item'>
            <div className='productContent'>
                {items.map(item => <Item className='product' item={item} key={item.id} />)}
            </div>
            <div className='itemCount'>
               <ItemCount stock={5} initial={0} />
            </div>    
        </div>

    )
}

export default ItemList




