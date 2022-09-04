import { useState } from "react";
import { Content } from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="absolue flex flex-col inset-0 w-full h-screen bg-black text-white">
      <Content className="">test</Content>
    </div>
  );
}

export default App;
