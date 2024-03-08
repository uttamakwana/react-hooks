import { useState } from "react";
import { useEventListener } from "../../useEventListener/hook/useEventListener";

export function useWindow() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerHeight);

  useEventListener("resize", () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  });

  return { width, height };
}
