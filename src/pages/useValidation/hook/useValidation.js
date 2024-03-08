import { useCallback, useState } from "react";

export function useValidation(initialValue, validationFn) {
  const [state, setState] = useState(() => initialValue);
  const [isValid, setIsValid] = useState(() => false);

  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFn(value));
    },
    [validationFn]
  );

  return [state, onChange, isValid];
}
