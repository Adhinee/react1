import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import Searchitem from './Searchitem';

function App() {

  const ppp = JSON.parse(localStorage.getItem("To_Do_List"))

  const [items, setItems] = useState(ppp)
  



  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {

    const id =items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id , checked:false ,item}
    const listItems = [...items, addNewItem]
    setItems(listItems)

    localStorage.setItem("To_Do_List", JSON.stringify(listItems))

  }

  const handleChange = (id) => {
    const listItems = items.map((n) => (n.id === id ? { ...n, checked: !n.checked } : n))
    setItems(listItems)
    localStorage.setItem("To_Do_List", JSON.stringify(listItems))

  }


  const handleDelete = (id) => {

    const listItems = items.filter((n) => n.id !== id)
    setItems(listItems)
    localStorage.setItem("To_Do_List", JSON.stringify(listItems))

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (

    <div className='App'>
      <Header/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}

      />
      <Searchitem/>
      
      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer
      length ={items.length}
      />
    </div>
  );
}

export default App;
