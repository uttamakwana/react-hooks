import { useEffect } from "react";
import { useTimeout } from "../../useTimeout/hook/useTimeout.js";
import { useEventListener } from "../../useEventListener/hook/useEventListener";

export function useLongPress(ref, callback, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(() => {
    clear();
  }, []);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}
