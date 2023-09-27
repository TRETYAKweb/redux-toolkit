import axios from "axios";
import { IUser } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsersAction = () => async (dispatch:AppDispatch) => {

//     const {userFetching , userFetchingSuccess, userFetchingError} = userSlice.actions

//     try {
//         dispatch(userFetching());
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userFetchingSuccess(res.data))
//     } catch (error) {
//         dispatch(userFetchingError('Не удалось загрузить пользователей!'))
//     }

// }

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return res.data;
        } catch (error) {
           return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
        }
    }
)