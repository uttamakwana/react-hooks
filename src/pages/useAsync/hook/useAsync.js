import { useCallback, useEffect, useState } from "react";

export function useAsync(callback, dependencies = []) {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(() => true);
  const [error, setError] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(data => data.json())
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { value, loading, error };
}
