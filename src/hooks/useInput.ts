import {useState} from 'react';

export const useInput = (
  initialState: string,
  validator?: (value: string) => boolean,
) => {
  const [value, setValue] = useState(initialState);
  const onChange = event => {
    const {
      target: {value: newValue},
    } = event;
    if (validator === undefined || validator(newValue)) {
      setValue(newValue);
    }
  };
  return {value, onChange};
};
