import './App.css';

import React, {useState} from 'react';

function range(start, end) {
  return Array.from({length: (end - start)}, (_, i) => start + i);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='count'>
        <h1>CNTRR</h1>
        <div className='tally-container'>
          {range(0, Math.floor(count/5)).map(i => <div className='tallies'>
            <div className='tally'></div>
            <div className='tally'></div>
            <div className='tally'></div>
            <div className='tally'></div>
            <div className='tally'></div>
          </div>)}
          {count % 5 > 0 && 
            <div className='tallies'>
              {range(0, count % 5).map(i => <div className='tally'></div>)}
            </div>
          }
          
        </div>
      </div>
      <div className='buttons'>
        <button onClick={() => setCount(Math.max(count - 1, 0))}>{"-"}</button>
        <button onClick={() => setCount(count + 1)}>{"+"}</button>
      </div>
    </div>
  );
}

export default App;
