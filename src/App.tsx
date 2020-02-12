import React from 'react';
import ScoreFrame from './components/ScoreFrame/ScoreFrame';

const App: React.FC = () => {
  return (
    <div>
      <h1>React bowling score</h1>
      <ScoreFrame first={5} second={4} total={9} />
      <ScoreFrame first={5} second={5} total={10} />
      <ScoreFrame first={10} total={10} />
    </div>
  );
};

export default App;
