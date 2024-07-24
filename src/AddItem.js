import React from 'react'
import './index.css';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            id='addItem'
            type="text"
            placeholder="Don't Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required />

        <button
        type='submit'
        aria-label='AddItem'>
        </button>
    </form>
  )
}

export default AddItem
