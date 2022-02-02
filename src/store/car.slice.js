import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const initialState = {
    cars:[]
}

const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {}) => (

    )
)

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {

    },
    extraReducers:{

    }
})

const careReducer = carSlice.reducer;

export default careReducer