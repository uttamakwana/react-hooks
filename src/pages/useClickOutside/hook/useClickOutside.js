import { useEventListener } from "../../useEventListener/hook/useEventListener.js";

export function useClickOutside(ref, callback) {

  useEventListener(
    "click",
    (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        callback(e);
      }
    },
    document
  );
}
