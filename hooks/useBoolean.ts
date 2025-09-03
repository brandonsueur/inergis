import { useCallback, useState } from "react";

const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, on, off, toggle };
};

export default useBoolean;
