import { useState } from "react";
import useTimeout from "./TimeoutComponent";

const TimeoutComponent = () => {
  const [count, setCount] = useState(5);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
};

export default TimeoutComponent;
