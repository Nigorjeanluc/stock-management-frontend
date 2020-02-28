import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import ItemContainer from './components/ItemContainer';
import OneItemContainer from './components/OneItemContainer';
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path='/login' component={LoginContainer} exact/>
          <Route path='/item' component={ItemContainer} exact/>
          <Route path='/item/:id' component={OneItemContainer} exact/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
