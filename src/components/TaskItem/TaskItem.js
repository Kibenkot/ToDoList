import s from './TaskItem.module.css'

function TaskItem(props){
  const {title, importance, id, day, deleteTask} = props

  const styles = {backgroundColor: (importance == 0) ? "#FF6347" : "#1ABC9C"}
  return(
      <div className ={'task_elem'} style={styles}>
          <h4 >{title}</h4>
          <button className={'xmark2'} onClick={() => deleteTask(day, id)}>X</button>
      </div>
  )
}

export default TaskItem