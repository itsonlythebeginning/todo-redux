import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer, changeStatusTask, deleteTask, editTask, addTask} from "./slices/tasksSlice.jsx";
import {editReducer, changeNewTitle, changeShow} from "./slices/editSlice.jsx";
import {addReducer, changeAddTitle} from "./slices/addSlice.jsx";
import {searchReducer, changeSearchTerm, changeActiveButton} from "./slices/searchSlice.jsx";


const store = configureStore({

    reducer: {
        tasks: tasksReducer,
        edit: editReducer,
        add: addReducer,
        search: searchReducer
    }

})



export {store,

    tasksReducer,
    changeStatusTask,
    deleteTask,
    editTask,
    addTask,


    editReducer,
    changeNewTitle,
    changeShow,

    addReducer,
    changeAddTitle,

    searchReducer,
    changeSearchTerm,
    changeActiveButton
}