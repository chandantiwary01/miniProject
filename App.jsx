import { useState } from "react";

function App() {
  let title = "Counter App"; // variable
  const [count, setCount] = useState(0); // number datatype

  function increment() {
    setCount(count + 1); // operator
  }

  function decrement() {
    if (count > 0) {     // conditional
      setCount(count - 1);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="text-2xl mb-4">Count: {count}</p>

      <div className="flex gap-4">
        <button onClick={increment} className="px-4 py-2 bg-yellow-500 text-white rounded">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
