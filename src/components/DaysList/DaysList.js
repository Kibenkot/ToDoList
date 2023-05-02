import s from './DaysList.module.css'
import DayItem from "../DayItem/DayItem"



function DaysList(props){

    const {tasks, deleteDay, deleteTask} = props
    const daysList = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']

    return(
        <div className ='container'>
            {tasks.map((elem,i) => 
                <div key={i} className={s.day_item_elem}>
                      <h2>{daysList[elem.day]}</h2>
                    <DayItem 
                        day={elem.day} 
                        tasksByDay={elem.tasksByDay} 
                        deleteDay ={deleteDay}
                        deleteTask={deleteTask}
                        />
                </div>  
                )}               
        </div>
    )
}


export default DaysList