import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../types";
import { fetchUsers } from "./fetchUsersAction";


const initialState:IUserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        // userFetching(state) {
        //     state.isLoading = true
        // },

        // userFetchingSuccess(state, action:PayloadAction<IUser[]>) {
        //     state.isLoading = false,
        //     state.users = action.payload,
        //     state.error = ''
        // },

        // userFetchingError(state, action:PayloadAction<string>) {
        //     state.isLoading = false,
        //     state.users = [],
        //     state.error = action.payload
        // }

    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action:PayloadAction<IUser[]>) => {
            state.isLoading = false,
            state.users = action.payload,
            state.error = ''
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action:PayloadAction<string>) => {
            state.isLoading = false,
            state.users = [],
            state.error = action.payload
        }
    }
})

export default userSlice.reducer