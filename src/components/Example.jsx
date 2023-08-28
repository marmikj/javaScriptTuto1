import React, { useState, useEffect, useMemo } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);

  
  const handleCount = () => {
    return setCount(count + 1);
  };
  useEffect(() => {
    console.warn("count is ");
  }, [count]);

  //use Memo Example
  const multicountMemo = useMemo(
    function multicount() {
      console.warn("multi count");
      return count * 5;
    },
    [count]
  );
  // const multicount =()=>{
  //   console.warn("multi count")
  //   return count*5
  // }

  useEffect(() => {
    console.warn("datupdate dataa useEffect");
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);
    console.warn("work 2");
  }, []);
  return (
    <>
      <h1>Count :{count}</h1>
      <h1>Data: {data}</h1>
      <h2>{multicountMemo}</h2>

      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setData(data + 1)}>update data</button>
    </>
  );
}

export default Example;
