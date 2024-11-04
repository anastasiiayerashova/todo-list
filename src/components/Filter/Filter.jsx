import s from './Filter.module.css'

export default function Filter({value, onFilter}) {
    return (
        <div className={s.filterDiv}>
              <p>Search by name</p>
            <input type="text" className={s.input} value={value} onChange={e => onFilter(e.target.value)}></input>
        </div>
    )
}