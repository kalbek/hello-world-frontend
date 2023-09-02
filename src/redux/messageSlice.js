import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  body: '',
  error: null,
};

export const getRandomMessage = createAsyncThunk(
  'messages/getRandomMessage',
  async () => {
    const response = await fetch('http://localhost:3000/rand_greeting');
    const data = await response.json();
    return data.body;
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomMessage.fulfilled, (state, action) => {
      state.body = action.payload;
    });

    builder.addCase(getRandomMessage.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default messagesSlice;
