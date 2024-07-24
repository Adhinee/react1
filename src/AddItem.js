import React from 'react'
import './index.css';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' >
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            id='addItem'
            type="text"
            placeholder="Don't Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required />

    </form>
  )
}

export default AddItem
