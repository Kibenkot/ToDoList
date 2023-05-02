import s from './DayItem.module.css'
import TaskItem from "../TaskItem/TaskItem"

function DayItem(props){

    const {tasksByDay, day, deleteDay, deleteTask} = props

    return(
        <div className ={'tasks_wrapper'}>
            {tasksByDay.map((elem,i) => 
                <div key={i}>
                    <TaskItem 
                        title={elem.title}
                        importance={elem.importance}
                        id = {elem.id}
                        day = {elem.day}
                        deleteTask ={deleteTask}
                        />
                </div>    
            )}
            <button className={'xmark1'} onClick={() => deleteDay(day)}>X</button>
        </div>
    )
}

export default DayItem