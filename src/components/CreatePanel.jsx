import Button from "./Button.jsx";
import {useSelector, useDispatch} from "react-redux";
import {changeAddTitle, addTask} from "../store/store.jsx";
import {nanoid} from "@reduxjs/toolkit";



function CreatePanel() {

    const dispatch = useDispatch()

    const {addTitle} = useSelector(  (state) => state.add  )
    const handleChange = (event) => {
        dispatch(changeAddTitle(event.target.value))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addTask({title: addTitle, id: nanoid()}))
    }

    return (
        <div className="border">
            <form onSubmit={handleSubmit} className="flex flex-wrap items-center">
                <input onChange={handleChange}
                       value={addTitle}
                       className="border-2 p-2 w-90 text-xl font-medium mr-8 placeholder:font-bold"
                       placeholder="What need to be done?"/>
                <Button submit>Add Todo</Button>
            </form>

        </div>
    )

}

export default CreatePanel