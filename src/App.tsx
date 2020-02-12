import React from 'react';
import { Provider } from 'react-redux';

import ScoreFrame from './components/ScoreFrame/ScoreFrame';
import Roll from './components/Roll/Roll';
import store from './redux/store';
import ScoresContainer from './containers/ScoresContainer/ScoresContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React bowling score</h1>
        <ScoreFrame first={5} second={4} total={9} />
        <ScoreFrame first={5} second={5} total={10} />
        <ScoreFrame first={10} total={10} />
        <div>
          <ScoresContainer />
        </div>
        <div>
          <Roll />
        </div>
      </div>
    </Provider>
  );
};

export default App;
