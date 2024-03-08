import { useState } from "react";
import { useEventListener } from "../../useEventListener/hook/useEventListener";

export function useHover(ref, callback) {
  const [isHovered, setIsHovered] = useState(() => false);
  useEventListener(
    "mouseover",
    () => {
      setIsHovered(true);
      callback();
    },
    ref.current
  );
  useEventListener("mouseout", () => setIsHovered(false), ref.current);

  return isHovered;
}
