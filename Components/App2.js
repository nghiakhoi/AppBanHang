import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, ListView, Image, RefreshControl, TextInput} from 'react-native';
import Drawer from 'react-native-drawer'


export default class AppBanHang extends Component {

	closeControlPanel = () => {
	    this._drawer.close()
	  };
	  openControlPanel = () => {
	    this._drawer.open()
	  };

	render() {
	  return (
		<Drawer
			openDrawerOffset={0.5}
			tapToClose={true}
	        ref={(ref) => this._drawer = ref}
	        content={
	        	<View style={{flex:1, backgroundColor:'yellow'}}></View>
	        }
	        >
	        <View style={{flex:1, backgroundColor:'red', padding:50}}>
				<TouchableOpacity onPress={()=>{this.openControlPanel()}}>
					<Text>Open</Text>
				</TouchableOpacity>
	        </View>
      	</Drawer>
	    );
	}
}

var styles = StyleSheet.create({
	wrapper:{flex:1, backgroundColor:"yellow", padding:50},
	plus: {padding:30, backgroundColor:"black", justifyContent:"center", alignItems:"center"},
	plusText: {color:"white"},
	result: {padding:30, backgroundColor:"white", justifyContent:"center", alignItems:"center"},
});