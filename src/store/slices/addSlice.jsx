import {createSlice} from "@reduxjs/toolkit";
import {addTask} from "../store.jsx";


const addSlice = createSlice({

    name: "add",
    initialState: {
        addTitle: ""
    },
    reducers: {
        changeAddTitle(state, action) {
            state.addTitle = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(addTask, (state, action) => {
            state.addTitle = ""
        })
    },

})


export const {changeAddTitle} = addSlice.actions
export const addReducer = addSlice.reducer