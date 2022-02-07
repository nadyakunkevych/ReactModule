import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    users:[
        {id: 1, name: ""},
        {id: 2, name: ""},
        {id: 1, name: ""}
    ]
}


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser:(state, action) => {
          const user =  action.payload.user;
          state.users.push(user)

        }
    }
});

const userReducer = userSlice.reducer;

export const {addUser} = userSlice.actions;
export default userReducer