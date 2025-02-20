import Button from "./Button.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {changeNewTitle, editTask, changeShow} from "../store/store.jsx";

function EditPanel({task, editData}) {

    const dispatch = useDispatch()

    const {title, id, done : status} = task
    const [{id : editID, isShow, newTitle}] = editData

    useEffect( () => {
        dispatch(changeNewTitle({
            id : editID,
            newTitle: title
        }))
    }, []  )

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(editTask({id, newTitle}))
        dispatch(changeShow(editID))
    }
    const handleChange = (event) => {
        dispatch(changeNewTitle({
            id : editID,
            newTitle: event.target.value
        }))
    }

    return (
        <div className="absolute left-0	top-0 h-full w-130 bg-gray-300 " >
             <form onSubmit={handleSubmit}  className="flex flex-wrap items-center h-full">
                 <input onChange={handleChange}
                        value={newTitle}
                        className="border p-4 text-3xl font-medium h-full w-90" />
                 <Button className="ml-auto">Сохранить</Button>
             </form>
        </div>
    )


}

export default EditPanel