import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from 'api/supabase';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (videoId, thunkAPI) => {
  try {
    const { data } = await client.from('comments').select('*').eq('videoId', `${videoId}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteComment = createAsyncThunk('comments/deleteComment', async (commentId, thunkAPI) => {
  try {
    await client.from('comments').delete().eq('id', commentId);
    // 댓글 삭제에 성공하면 삭제된 댓글의 ID를 반환
    return commentId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// 초기 상태 정의
const initialState = {
  comments: []
};

// Slice 생성
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  }
});

export default commentSlice.reducer;
