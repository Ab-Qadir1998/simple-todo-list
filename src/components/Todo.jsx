import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const Todo = ()=> {
    const [ todoInput, setTodoInput ] = useState('')
    const [ addTodo, setAddTodo ] = useState([])

    // Add Todo 

    const addItem = (e)=> {
        e.preventDefault();
        if(!todoInput){

        } else {
            setAddTodo([...addTodo ,todoInput])
            setTodoInput('')
        }
    }


    // Delete Todo 

    const removeItem = (id)=> {
        const updatedList = addTodo.filter( (item, ind) => {
            return ind !== id
        } )
        setAddTodo(updatedList)
    }

    // clear All Todos 

    const clearAll = ()=> {
        setAddTodo([])
    }

    return (
        <div className="container">
            <h3 className="header">Todo List</h3>
            <form className="input_form">
            <TextField id="standard-basic" label="Write a Todo" autocomplete="false"  value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
             <Button type="submit" variant="contained" onClick={addItem}><i class="fa fa-plus"></i></Button>
            </form>

            <ul class="list_items">
                { addTodo.map(( item, ind ) => {
                    return (
                        <li key={ ind }>{ item } <button onClick={()=> removeItem(ind)}>&times;</button></li>
                    )
                }) }
            </ul>

            <Button variant="contained" className="clear" onClick={clearAll}>Clear All</Button>
        </div>
    )
}

export default Todo;