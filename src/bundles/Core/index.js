import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './Router';
import { store } from '../../store/create';

export default class App extends Component {
  render() {
    console.log('STORE', store.getState());
    return (
      <Provider store={store}>
        <Navigator ref={(ref) => { this.navigator = ref; }} />
      </Provider>
    );
  }
}