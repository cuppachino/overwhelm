import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='absolue flex flex-col inset-0 w-full h-screen'>
      <div className='w-full h-full bg-mono-7 text-white'>
        <h1>Whats up</h1>
        <p></p>
      </div>
    </div>
  );
}

export default App;
