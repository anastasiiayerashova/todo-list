import s from './TodoList.module.css';

export default function TodoItem({ id, todo, completed, handleDeleteTodo }) {
    return (
        <li className={s.item}>
            <input type='checkbox' />
            <span>{todo}</span>
            <button className={s.delete} onClick={() => {
                handleDeleteTodo(id)
            }}>Delete</button>
        </li>
    )
}