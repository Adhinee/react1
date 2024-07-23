import React from 'react'
import ItemsList from './ItemsList'
import './index.css';

const Content = ({handleChange,handleDelete,items}) => {
  return (

    <main>
      
      <ItemsList
        handleChange={handleChange}
        handleDelete={handleDelete}
        items={items}
      />
    </main>


  )
}

export default Content