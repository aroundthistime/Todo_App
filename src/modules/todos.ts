import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '../@types/Todo';

type TodosState = Todo[];

const initialState: TodosState = [];

export const clearTodo = createAsyncThunk(
  'todos/clearTodo',
  (todoId: number, thunkAPI) => {
    const updatedFields = {
      id: todoId,
      cleared: true,
    };
    thunkAPI.dispatch(modifyTodo(updatedFields));
  },
);

export const restoreTodo = createAsyncThunk(
  'todos/restoreTodo',
  (todoId: number, thunkAPI) => {
    const updatedFields = {
      id: todoId,
      cleared: false,
    };
    thunkAPI.dispatch(modifyTodo(updatedFields));
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const lastTodoId: number = state[state.length - 1]?.id || 0;
      state.push({
        id: lastTodoId + 1,
        ...action.payload,
      });
    },
    removeTodo(state, action: PayloadAction<number>) {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    modifyTodo(state, action: PayloadAction<Partial<Todo> & {id: number}>) {
      //Partial이지만 id는 꼭 필요함
      const index = state.findIndex(
        (todo: Todo) => todo.id === action.payload.id,
      );
      if (index > -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      } else {
        throw new Error("Todo doesn't exist");
      }
    },
  },
});

export const {addTodo, removeTodo, modifyTodo} = todosSlice.actions;

export const todosSelector = state => (state.todos ? state.todos : []);

export default todosSlice.reducer;
