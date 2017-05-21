import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App2 from './Components/App2.js';

export default class AppBanHang extends Component {
  render() {
    return (
      <App2 />
    );
  }
}

AppRegistry.registerComponent('AppBanHang', () => AppBanHang);
