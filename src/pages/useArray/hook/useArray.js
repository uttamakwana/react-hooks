import { useLocalStorage } from "../../useLocalStorage/hook/useLocalStorage.js";

export function useArray(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);

  //does: push the element
  function push(element) {
    setValue((prevValue) => [...prevValue, element]);
  }

  //does: remove element from start
  function shift() {
    setValue(value.slice(1));
  }

  //does: pop the element
  function pop() {
    setValue(value.slice(0, -1));
  }

  //does: add element from start
  function unshift(element) {
    setValue((prevValue) => [element, ...prevValue]);
  }

  //does: filters an array
  function filter(callback) {
    const copyValue = value.filter((item) => {
      return callback(item);
    });
    setValue(copyValue);
  }

  return { value, push, pop, shift, unshift, filter };
}
