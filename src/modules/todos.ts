import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '../@types/Todo';
import {showToast} from '../utils/toastHandler';

const initialState: Todo[] = [];

export type TodoUpdateFields = Partial<Todo> & {id: number};

export const clearTodo = createAsyncThunk(
  'todos/clearTodo',
  (todoId: number, thunkAPI) => {
    const updatedFields = {
      id: todoId,
      cleared: true,
    };
    showToast('투두를 완료했습니다');
    thunkAPI.dispatch(editTodo(updatedFields));
    // showToast('투두를 완료했습니다');
  },
);

export const restoreTodo = createAsyncThunk(
  'todos/restoreTodo',
  (todoId: number, thunkAPI) => {
    const updatedFields = {
      id: todoId,
      cleared: false,
    };
    showToast('투두를 복원했습니다');
    thunkAPI.dispatch(editTodo(updatedFields));
    // showToast('투두를 복원했습니다');
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Omit<Todo, 'id' | 'cleared'>>) {
      const lastTodoId: number = state[state.length - 1]?.id || 0;
      state.push({
        id: lastTodoId + 1,
        cleared: false,
        ...action.payload,
      });
      showToast('투두가 추가되었습니다');
    },
    removeTodo(state, action: PayloadAction<number>) {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
      showToast('투두를 삭제했습니다');
    },
    editTodo(state, action: PayloadAction<TodoUpdateFields>) {
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

export const {addTodo, removeTodo, editTodo} = todosSlice.actions;

export const todosSelector = state => (state.todos ? state.todos : []);

export default todosSlice.reducer;
