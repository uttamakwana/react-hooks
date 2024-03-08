import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export function useCookie(key, initialValue) {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(key);
    if (cookie) return cookie;
    Cookies.set(key, initialValue);
    return initialValue;
  });

  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(key, newValue, options);
      setValue(newValue);
    },
    [key]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(key);
    setValue(null);
  }, [key]);

  return { value, updateCookie, deleteCookie };
}
