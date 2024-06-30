import { useState } from "react";
import ExpensiveComponent from "./MainComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
      <p>Count: {count}</p>
      <ExpensiveComponent a={a} b={b} />
    </div>
  );
};

export default App;
