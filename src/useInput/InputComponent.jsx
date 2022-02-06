import React from "react";
import useInput from "./useInput";

const InputComponent = () => {
  const [value, changeHandler] = useInput("");

  return (
    <div>
      <form>
        <label htmlFor="input">Input</label>
        <input
          id="input"
          autoComplete="off"
          value={value}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default InputComponent;
