import {createSlice, nanoid} from "@reduxjs/toolkit";
import {addTask} from "../store.jsx";


const editSlice = createSlice({

    name: "edit",
    initialState: {
        editData : [
            {id: nanoid(), isShow: false, newTitle: "", parentId: 111},
            {id: nanoid(), isShow: false, newTitle: "", parentId: 222}
        ]
    },
    reducers: {

      changeNewTitle(state, action) {

          const updatedArr = state.editData.map(function (data) {
              if (data.id === action.payload.id) {
                  return {
                      ...data,
                      newTitle: action.payload.newTitle
                  }
              }
              return data
          })
          state.editData = updatedArr
      },

        changeShow(state, action) {
            const updatedArr = state.editData.map(function (data) {
                if (data.id === action.payload) {
                    return {
                        ...data,
                        isShow: !data.isShow
                    }
                }
                return data
            })
            state.editData = updatedArr
        },

    },

    extraReducers: (builder) => {
        builder.addCase(addTask, (state, action) => {
            state.editData.push({id: nanoid(), isShow: false, newTitle: "", parentId: action.payload.id})
        })
    },


})


export const {changeNewTitle, changeShow} = editSlice.actions
export const editReducer = editSlice.reducer


