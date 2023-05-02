import s from './Select.module.css'

function Select({name, options}) {
  return (
    <select className={s.select_elem} name={name}>
        {options.map(((el, i)=>
            <option key={i} value={i} >
                {el}
            </option>
        ))}
            </select>
  )
}

export default  Select