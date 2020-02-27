import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.scss';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
