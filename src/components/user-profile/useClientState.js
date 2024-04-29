// useClientState.js
import { useEffect, useState } from 'react';

export const useClientState = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
  }, []);

  return [state, setState];
};
