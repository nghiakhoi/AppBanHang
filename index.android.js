import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from "./Components/App.js";

export default class AppBanHang extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AppBanHang', () => AppBanHang);
