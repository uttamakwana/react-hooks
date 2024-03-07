import { useEffect } from "react";
import { useTimeout } from "../../useTimeout/hook/useTimeout.js";

export function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [reset, ...dependencies]);
  useEffect(clear, [clear]);
}
