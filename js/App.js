import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Appnavigator from './navigator/AppNavigator';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Provider store={store}>
      <Appnavigator />
    </Provider>
  }
}
