import { useCallback, useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const changeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, changeHandler];
};

export default useInput;
