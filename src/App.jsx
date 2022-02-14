import { createContext } from "react";
import Counter from "./Component/Counter";
import CounterRed from "./Component/CounterRed";
import ToggleButton from "./Component/ToggleButton";
import CompA from "./Context/CompA";

export const FirstName = createContext();
const App = () => {
  return (
  <>
  <ToggleButton/>
  <Counter/>
  <FirstName.Provider value={"Mir Bunny"}>
  <CompA/>
  </FirstName.Provider>
  <CounterRed/>
  </>
  )
};

export default App;