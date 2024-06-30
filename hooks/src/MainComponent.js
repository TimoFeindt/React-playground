import { useMemo } from "react";

export default function ExpensiveComponent({ a, b }) {

  const expensivFunction = (a,b) => {  
    let result = 0;
    for(let i = 0; i< 100000000; i++) {
      result += a + b;
    }
    return result;
  }

  const memoizedValue = useMemo(() => expensivFunction(a, b), [a, b]);

  
  return (
    <div>
      <p>Expensive Value: {memoizedValue}</p>
    </div>
  );
};
