import { useReducer, useEffect, useRef } from "react";
import isEqual from "lodash.isequal";

export function useSetState(initialState) {
  return useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useDeepCompareEffect(callback, inputs) {
  const previousInputs = usePrevious(inputs);

  useEffect(() => {
    if (!isEqual(previousInputs, inputs)) {
      callback();
    }
  });
}
