import { useEffect, useState } from "react";

function getStoredValue(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getStoredValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
