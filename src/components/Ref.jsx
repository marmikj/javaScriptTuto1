import React, { useRef } from "react";

function Ref() {
  let inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Example </h1>
      <input ref={inputRef} type="text" />
      <button onClick={updateInput}>update input</button>
    </div>
  );
}

export default Ref;
