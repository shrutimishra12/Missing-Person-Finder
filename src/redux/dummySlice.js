import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    setDummyData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDummyData } = dummySlice.actions;
export default dummySlice.reducer;