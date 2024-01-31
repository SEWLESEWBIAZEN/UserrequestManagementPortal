import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching branches
export const loginUser = createAsyncThunk('user/loginUser', async (userCredentials) => {
    const request = await axios.post('login', userCredentials);
    const response = await request.data.token
    return response
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    const response = await axios.get('logout');
    return response
});

const initialState = {
    user: localStorage.getItem('user')? localStorage.getItem('user'):null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {        
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            });

        builder
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null
                state.user = null;
                localStorage.removeItem('user')
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default userSlice.reducer;
