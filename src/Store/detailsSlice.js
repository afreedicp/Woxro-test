import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  details: {
    heading: "Kerala's Leading Web Design Company",
    location: 'Leshore Business Park, Thrissur',
    number: '+91 487 2080 212',
  },
};

export const updateHeading = createAsyncThunk(
  '/updateHeading',
  async ({ data, successCB }) => {
    successCB(data);
    return data;
  }
);
export const updateNumber = createAsyncThunk(
  '/updateNumber',
  async ({ data, successCB }) => {
    successCB(data);
    return data;
  }
);
export const updateLocation = createAsyncThunk(
  '/updateLocation',
  async ({ data, successCB }) => {
    successCB(data);
    return data;
  }
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateHeading.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.details.heading = action.payload;
      })
      .addCase(updateHeading.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(updateNumber.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details.number = action.payload;
      })
      .addCase(updateNumber.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(updateLocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details.location = action.payload;
      })
      .addCase(updateLocation.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { updateStatus } = detailsSlice.actions;

export default detailsSlice.reducer;

export const selectDetails = (state) => state?.details.details;
