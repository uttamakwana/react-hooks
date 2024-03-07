import { useLocalStorage } from "../../useLocalStorage/hook/useLocalStorage";

export function useToggle(initialValue) {
  const [value, setValue] = useLocalStorage("hook-model", initialValue);

  function toggleValue(value) {
    setValue((prevValue) => (typeof value === "boolean" ? value : !prevValue));
  }
  return [value, toggleValue];
}
