import s from './TodoList.module.css';
import todosData from './../../assets/todos.json';
import TodoItem from './TodoItem';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';

export default function TodoList() {
    const [todos, setTodos] = useState(() => {
try {
    const savedObj = window.localStorage.getItem("key");
    return savedObj ? JSON.parse(savedObj) : todosData;
  } catch (error) {
    console.error("Ошибка парсинга JSON:", error);
    return todosData; 
  }
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

    const [filter, setFilter] = useState('');
    const visibleTodo = todos.filter((task) => task.todo.toLowerCase().includes(filter.toLocaleLowerCase()))

    return (
        <>  
        <div className={s.inputDiv}>
                <input className={s.input} value={newValue} onChange={e => setNewValue(e.target.value) } />
                <button className={s.btn} onClick={handleAddTodo}>Add</button>
                
            </div>
            <Filter value={filter} onFilter={setFilter} />
             <ul className={s.list}>
        {visibleTodo.map(item => (
            <TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
            </>
    )
}