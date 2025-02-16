import Button from "./Button.jsx";
import EditPanel from "./EditPanel.jsx";
import { GrEdit } from "react-icons/gr";
import { FaExclamation } from "react-icons/fa";
import {changeStatusTask, deleteTask, changeShow} from "../store/store.jsx";
import {useDispatch} from "react-redux";



function TaskShow({task, editData}) {

    const dispatch = useDispatch()

    const {title, id, done : status} = task

    const {id : editID, isShow, newTitle} = editData

    const handleStatusClick = (id) => {
        dispatch(changeStatusTask(id))
    }
    const handleDeleteClick = (id) => {
        dispatch(deleteTask(id))
    }

    const handleEditClick = () => {
        dispatch(changeShow(editID))
    }

    return (

        <div className="flex flex-wrap items-center p-4 border-b-1 relative">
            {status
                ? <h3 className="font-semibold text-3xl opacity-50">{title}</h3>
                : <h3 className="font-semibold text-3xl">{title}</h3>
            }

            {isShow && <EditPanel task={task} editData={editData}/>}

            <div className="flex flex-wrap ml-auto">
                {status
                    ? <Button onClick={handleEditClick} disabled className="mr-4"><GrEdit className="scale-150 min-w-7"/></Button>
                    : <Button onClick={handleEditClick} className="mr-4"><GrEdit className="scale-150 min-w-7"/></Button>
                }
                {status
                    ? <Button onClick={ () => {handleStatusClick(id)} } className="w-11.5 mr-4" done>✔</Button>
                    : <Button onClick={ () => {handleStatusClick(id)} } className="w-11.5 mr-4" danger><FaExclamation className="scale-110 min-w-7"/></Button>
                }
                <Button onClick={ () => {handleDeleteClick(id)}  }>❌</Button>
            </div>
        </div>

    )

}

export default TaskShow