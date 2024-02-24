import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { boardItems: [] };

const { data } = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/content`);
data?.forEach((element) => {
  initialState.boardItems.push(element);
});

const boardSlice = createSlice({
  name: 'boardItems',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/content`, action.payload);

      return {
        ...state,
        boardItems: [
          ...state.boardItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
            password: action.payload.password,
            timeString: action.payload.timeString,
            content: action.payload.content,
            urlString: action.payload.urlString
          }
        ]
      };
    },

    deleteBoard: (state, action) => {
      axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/content/${action.payload.id}`);

      return {
        ...state,
        boardItems: state.boardItems.filter((element) => action.payload.id !== element.id)
      };
    },

    modifyBoard: (state, action) => {
      axios.patch(`${process.env.REACT_APP_SERVER_ADDRESS}/content/${action.payload.id}`, action.payload);

      const newBoardItems = state.boardItems.filter((element) => action.payload.id !== element.id);

      return {
        ...state,
        boardItems: [
          ...newBoardItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
            password: action.payload.password,
            timeString: action.payload.timeString,
            content: action.payload.content,
            urlString: action.payload.urlString
          }
        ]
      };
    }
  }
});

export const { addBoard, deleteBoard, modifyBoard } = boardSlice.actions;
export default boardSlice.reducer;
