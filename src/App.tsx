import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import GameContainer from './containers/GameContainer/GameContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React bowling score</h1>
        <GameContainer />
      </div>
    </Provider>
  );
};

export default App;
