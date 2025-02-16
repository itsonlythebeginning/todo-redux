import TaskShow from "./TaskShow.jsx";
import {useSelector} from "react-redux";
function TaskList() {

    const {searchTerm, activeButton} = useSelector( (state) => state.search )

    const {tasks} = useSelector( (state) => state.tasks )

    const {editData} = useSelector(  (state) => state.edit  )

    const filteredTasks = tasks.filter(function (task) {

        if (activeButton === "All") {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

        else if (activeButton === "Active" && !task.done) {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

        else if (activeButton === "Done" && task.done) {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

    })

    const renderedTasks = filteredTasks.map(function (task, index) {
        return <TaskShow key={task.id} task={task} editData={editData[index]} />
    })

    return (
        <div className="border border-b-0 mb-16">
            {renderedTasks}
        </div>
    )

}

export default TaskList