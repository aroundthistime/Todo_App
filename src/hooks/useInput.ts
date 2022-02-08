import {useState} from 'react';

export type useInputType = {
  value: string;
  onChangeText: (text: string) => void;
};

export const useInput = (
  initialState: string,
  validator?: (value: string) => boolean,
) => {
  const [value, setValue] = useState(initialState);
  const onChangeText = (text: string) => {
    if (validator === undefined || validator(text)) {
      setValue(text);
    }
  };
  return {value, onChangeText};
};
