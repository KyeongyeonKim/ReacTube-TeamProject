import { createSlice } from '@reduxjs/toolkit';
import client from 'api/supabase';

// 초기 상태 정의
const initialState = {
  comments: []
};

// Slice 생성
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      client.from('comments').insert(action.payload);
    }
  }
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
