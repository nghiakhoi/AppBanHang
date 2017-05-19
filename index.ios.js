import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App1 from "./Components/App1.js";

export default class AppBanHang extends Component {
  render() {
    return (
      <App1 />
    );
  }
}

AppRegistry.registerComponent('AppBanHang', () => AppBanHang);
