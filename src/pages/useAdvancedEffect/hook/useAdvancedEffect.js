import { useEffect, useRef } from "react";

export function useAdvancedEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
