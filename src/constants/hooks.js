export const hooksArr = [
  "useState",
  "useEffect",
  "useContext",
  "useRef",
  "useMemo",
  "useCallback",
  "useReducer",
  "useTransition",
  "useDeferredValue",
  "useLayoutEffect",
  "useDebugValue",
  "useImperativeHandle",
  "useId",
  // "useEffectEvent",
  // "use",
  // "useFormStatus",
  // "useOptimistic",
  "useLocalStorage",
  "useToggle",
  "useTimeout",
  "useDebounce",
  "useAdvancedEffect",
  "useArray",
  "usePrevious",
  "useHistory",
  "useAsync",
  "useFetch",
  "useEventListener",
  "useOnScreen",
  "useWindow",
  "useValidation",
  "useSize",
  "useClickOutside",
  "useCopy",
  "useCookie",
];

export const hooks = hooksArr.map((hook, index) => ({
  name: hook,
  codeUrl: `https://github.com/uttamakwana/react-hooks/blob/main/src/pages/${hook}/${hook}.jsx`,
  reactDoc: `https://react.dev/reference/react/${hook}`,
  id: index + 1,
}));
