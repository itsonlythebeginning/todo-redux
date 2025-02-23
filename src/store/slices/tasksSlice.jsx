import {createSlice} from "@reduxjs/toolkit";


const tasks = [
    {id : 111, title: "Hello word", done: false},
    {id : 222, title: "Go Gym", done: false}
]


const tasksSlice = createSlice({

    name: "tasks",
    initialState: {
        tasks,
    },
    reducers: {

        changeStatusTask(state, action) {
            const updatedTasks = state.tasks.map(function (task) {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task
            })
            state.tasks = updatedTasks
        },

        deleteTask(state, action) {
            const updatedTasks = state.tasks.filter(function (task) {
                return task.id !== action.payload
            })
            state.tasks = updatedTasks
        },

        editTask(state, action) {
            const updatedTasks = state.tasks.map(function (task) {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.newTitle
                    }
                }
                return task
            })
            state.tasks = updatedTasks
        },

        addTask(state, action) {
            state.tasks.push({
                id: action.payload.id,
                title: action.payload.title,
                done: false
            })
        },

    }
})


export const {changeStatusTask, deleteTask, editTask, addTask} = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer