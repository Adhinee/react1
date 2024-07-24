import React from 'react'
import './index.css';

const ItemsList = ({handleChange,handleDelete,items}) => {
  return (
    
    (items.length) ? (
        <div className='contented'>
          <ul>
            {items.map((n) => (
              <li key={n.id}
              onDoubleClick={() => handleChange(n.id)}>
    
                <label 
                style={(n.checked) ? {textDecoration:"line-through"}:null}>
                    {n.item}
                </label>
    
    
              </li>
            ))}
          </ul>
        </div>
      ) : (<p className='empty'>Your List Is Empty </p>)
  )
}

export default ItemsList
