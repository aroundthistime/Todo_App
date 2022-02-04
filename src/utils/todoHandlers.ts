import {IMPORTANCE_LEVEL_DICT, Todo} from '../@types/Todo';
import {datesAreOnSameDay} from './dates';

export const sortTodosByImportanceLevel = (todos: Todo[]): Todo[] => {
  const compareByImportanceLevel = (todo1: Todo, todo2: Todo): number => {
    return (
      IMPORTANCE_LEVEL_DICT[todo1.importanceLevel] -
      IMPORTANCE_LEVEL_DICT[todo2.importanceLevel]
    );
  };
  const sortedTodos = [...todos].sort(compareByImportanceLevel);
  return sortedTodos;
};

export const filterTodosByDate = (todos: Todo[], date: Date): Todo[] =>
  todos.filter(todo => datesAreOnSameDay(date, new Date(todo.deadline)));

export const filterTodosForToday = (todos: Todo[]) =>
  filterTodosByDate(todos, new Date());
