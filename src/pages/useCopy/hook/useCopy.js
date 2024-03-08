import { useState } from "react";
import copy from "copy-to-clipboard";

export function useCopy() {
  const [value, setValue] = useState();
  const [success, setSuccess] = useState();

  const copyToClipboard = (text, options) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return { copyToClipboard, value, success };
}
