import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, Image} from 'react-native';

export default class AppBanHang extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
	  };
	}

	render() {
	  return (
	    <ListView 
			dataSource={this.state.dataSource}
			renderRow={(row)=>
				<View style={{padding:20, borderWidth:1}}>
					<Image source={{uri:row.hinh}} style={{width:70, height:70}} />
					<Text>{row.ten}</Text>
				</View>
			}
	      />
	    );
	}

	componentDidMount(){

		fetch("http://192.168.1.87:3000/")
		.then((response)=>response.json())
		.then((responsejson)=>{
			console.log(responsejson);
			this.setState({
			dataSource: this.state.dataSource.cloneWithRows(responsejson)
		});
		})
		.catch((error)=>{
			console.log(error);
		});

		
	}
}