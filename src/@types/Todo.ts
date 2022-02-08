export type ImportanceLevel = keyof typeof IMPORTANCE_LEVEL_DICT;

export const IMPORTANCE_LEVEL_DICT = {
  high: -1,
  medium: 0,
  low: 1,
};

export interface Todo {
  id: number;
  title: string;
  content: string;
  cleared: boolean;
  deadline: number;
  importanceLevel: ImportanceLevel;
}
