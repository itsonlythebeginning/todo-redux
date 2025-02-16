import {createSlice} from "@reduxjs/toolkit";


const searchSlice = createSlice({

    name: "search",
    initialState: {
        searchTerm: "",
        buttons: [{title: "All"}, {title: "Active"}, {title: "Done"}],
        activeButton: "All",
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },

        changeActiveButton(state, action) {
            state.activeButton = action.payload
        }
    }

})


export const {changeSearchTerm, changeActiveButton} = searchSlice.actions
export const searchReducer = searchSlice.reducer