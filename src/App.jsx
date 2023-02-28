import Navbar from "./components/Navbar"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"

export default function App () {
    // const items = [
    //     {id : 1, text : "Finish the avengers series"},
    //     {id : 1, text : "Take my dog to the vet"},
    //     {id : 1, text : "Go to the car wash"},

    // ]

    const [items, setItems] = useState([
        {id : 1, text : "Find a printing company to design my recipe card"},
    ])
    
    // setItems()

    const addItem = (item) => {
        setItems([...items, item])
    }

    const deleteItem = (item) => {
        if (window.confirm("Delete This Item?")) {
            setItems(
                items.filter((current) => current.id !== item.id)
            )
        }
    }
    const editItem = (item) => {
        const input = window.prompt("Update Text:", item.text)
        if (input) setItems(
            items.map((current) => (current.id === item.id) ? {...current, text: input} : current)
        )
    }
    const clearItems = () => setItems([])

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar  items={items} clearItems={clearItems}/>
            <div className="container pt-5">
                <div className="col-12 col-lg-6 p-5 mx-auto mt-5 border border-light rounded"> 
                     <Form addItem={addItem}/>
                     <List items={items} deleteItem={deleteItem} editItem={editItem} />
                </div>               
            </div>
        </div>
    ) 
}