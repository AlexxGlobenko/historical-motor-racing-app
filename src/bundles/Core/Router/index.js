import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BackHandler } from 'react-native';

import routerConfig from './routerConfig';



export const AppNavigator = createStackNavigator(routerConfig,{
  Home: 'AllRacers'
});

const App = createAppContainer(AppNavigator);

export default class Navigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler);
  }

  onBackHandler = () => {
    if (this.navigation) {
      this.navigation.goBack();
    }
    return;
  };

  render() {
    return <App ref={(ref) => { this.navigator = ref; }} />;
  }
}
