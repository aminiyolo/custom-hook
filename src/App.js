import "./App.css";
import ArrayComponent from "./useArray/ArrayComponent";
import DebounceComponent from "./useDebounce/DebounceComponent";
import InputComponent from "./useInput/InputComponent";
import TimeoutComponent from "./useTimeout/useTimeout";
import ToggleComponent from "./useToggle/ToggleComponent";

function App() {
  return (
    <div>
      <ToggleComponent />
      <InputComponent />
      <TimeoutComponent />
      <DebounceComponent />
      <ArrayComponent />
    </div>
  );
}

export default App;
