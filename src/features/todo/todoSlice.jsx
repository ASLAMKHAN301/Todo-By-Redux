import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  value: "",
  isDark: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addValue(state, action) {
      state.value = action.payload;
    },
    addTodo(state) {
      if (state.value === "") return alert("add todo");
      state.todo.push(state.value);
      state.value = "";
    },
    darkMode(state) {
      state.isDark = !state.isDark;
    },
    removeTodo (state, action){
      state.todo = state.todo.filter((_, index) => index !== action.payload)
    }
  },
});

export const { addValue, addTodo, darkMode,removeTodo } = todoSlice.actions;
export default todoSlice.reducer;