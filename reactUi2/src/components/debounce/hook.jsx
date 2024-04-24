import { useEffect, useState } from "react";

function useDebounce(paramValue) {
  const [debounceValue, setDebounceValue] = useState(paramValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(paramValue);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [paramValue]);

  return debounceValue;
}

export default useDebounce;
