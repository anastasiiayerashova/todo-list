import s from './TodoList.module.css';
import todosData from './../../assets/todos.json';
import TodoItem from './TodoItem';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function TodoList() {
    const [todos, setTodos] = useState(() => {

        const savedObj = window.localStorage.getItem("key");
        if (savedObj) {
            return JSON.parse(savedObj)
        }
        return todosData;
    });
    const [newValue, setNewValue] = useState('')
   
    const handleAddTodo = () => {

        const newTodo = {
            id: nanoid(),
            todo: newValue,
            completed: false,
        }
        setTodos(
            prev => [...prev, newTodo]
        )
        setNewValue('')
    }
    
    const handleDeleteTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id)); 
    }

    useEffect(() => {
        window.localStorage.setItem("key", JSON.stringify(todos))
    }, [todos])

    return (
        <>  
        <div className={s.inputDiv}>
                <input className={s.input} value={newValue} onChange={e => setNewValue(e.target.value) } />
                <button className={s.btn} onClick={handleAddTodo}>Add</button>
            </div>
             <ul className={s.list}>
        {todos.map(item => (
            <TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
            </>
    )
}