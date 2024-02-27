import { createSlice } from '@reduxjs/toolkit';

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState: {
    youtubeInstance: null
  },
  reducers: {
    setYoutubeInstance: (state, action) => {
      state.youtubeInstance = action.payload;
    }
  }
});

export const { setYoutubeInstance } = youtubeSlice.actions;
export const selectYoutubeInstance = (state) => state.youtube.youtubeInstance;
export default youtubeSlice.reducer;
