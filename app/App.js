/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './createStore';
import NavigationContainer from './containers/NavigationPageContainer'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    <Provider store = { store}>
      <NavigationContainer />
    </Provider>
  }
}
