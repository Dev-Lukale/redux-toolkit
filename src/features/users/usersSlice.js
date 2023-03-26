import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid,
            name,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state) => state.users;
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
