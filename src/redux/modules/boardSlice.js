import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from 'api/supabase';

export const fetchBoardItems = createAsyncThunk('board/fetchBoardItems', async () => {
  const { data, error } = await client.from('content').select('*');
  if (error) throw error;
  return data;
});

const initialState = { boardItems: [] };

const boardSlice = createSlice({
  name: 'boardItems',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      client.from('content').insert(action.payload);
    },

    deleteBoard: (state, action) => {
      client.from('content').delete().eq('id', action.payload.id);
    },

    modifyBoard: (state, action) => {
      client.from('content').update(action.payload).eq('id', action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoardItems.fulfilled, (state, action) => {
      state.boardItems = action.payload;
    });
  }
});

export const { addBoard, deleteBoard, modifyBoard } = boardSlice.actions;
export default boardSlice.reducer;

export const loadBoardItems = () => async (dispatch) => {
  try {
    dispatch(fetchBoardItems());
  } catch (error) {
    console.error('Error loading board items', error);
  }
};
