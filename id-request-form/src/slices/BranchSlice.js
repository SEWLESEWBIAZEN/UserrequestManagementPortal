import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching branches
export const fetchBranches = createAsyncThunk('branches/fetchBranches', async () => {
  const response = await axios.get('branch/getbranches');
  return response.data.branches;
});

export const addBranch = createAsyncThunk('branches/addBranch', async (branch) => {
  const response = await axios.post('branch/addbranch', branch)
  window.location.reload()
    .then((res) => res.json());
  return response.data.branches;
});
export const deleteBranch = createAsyncThunk('branches/deleteBranch', async (id) => {
  const response = await axios.delete(`branch/deletebranch/${id}`)

    .then((res) => res.json());
  return response.data.branches;
});

export const updateBranch = createAsyncThunk('branches/updateBranch', async (updateForm) => {
  const response = await axios.put(`branch/updatebranch/${updateForm._id}`,
    { branchId: updateForm.branchId, name: updateForm.name })
  window.location.reload()
    .then((res) => res.json());

  return response.data.branches;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
}


const branchSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBranches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(deleteBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(updateBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default branchSlice.reducer;
