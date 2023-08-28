import { useCallback, useRef, useState } from "react";
import "./App.css";
import Example from "./components/Example";
import Ref from "./components/Ref";
import User from "./components/User";
import ChildA from "./components/ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    //SOME OPRATOIPN
  }, [count]);
  // inputRef = useRef(null);

  // const handleInput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.style.color = "red";
  //   inputRef.current.foucus();
  // };

  return (
    <div className="App">
      
      <></>
      <>
        <h1>useCallback funcion </h1>

        <ChildA Learning={Learning} count={count} />
        <h1>{add}</h1>
        <button onClick={() => setAdd(add + 1)}>additon</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 2)}>count</button>
      </>
    </div>
  );
}

export default App;
