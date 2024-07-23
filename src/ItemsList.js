import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import './index.css';

const ItemsList = ({handleChange,handleDelete,items}) => {
  return (
    
    (items.length) ? (
        <div className='contented'>
          <ul>
            {items.map((n) => (
              <li key={n.id}
              onDoubleClick={() => handleChange(n.id)}>
                <input 
                type="checkbox"
                onChange={() => handleChange(n.id)}
                checked={n.checked} />
    
                <label 
                style={(n.checked) ? {textDecoration:"line-through"}:null}>
                    {n.item}
                </label>
    
    
                <FaTrashAlt
                onClick={() => handleDelete(n.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (<p className='empty'>Your List Is Empty </p>)
  )
}

export default ItemsList