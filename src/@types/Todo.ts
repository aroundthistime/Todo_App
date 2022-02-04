export type ImportanceLevel = 'high' | 'medium' | 'low';

type ImportanceLevelDict = {
  [key in ImportanceLevel]: number;
};

export const IMPORTANCE_LEVEL_DICT: ImportanceLevelDict = {
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
