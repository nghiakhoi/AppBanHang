import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, Image, RefreshControl} from 'react-native';

export default class AppBanHang extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	refreshing: false,
	  	trang:0,
	  	dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
	  };
	}

	loadNewData(){
		this.setState({
			refreshing:true
		});
		fetch("http://192.168.1.87:3000/trang/"+this.state.trang)
		.then((response)=>response.json())
		.then((responsejson)=>{
			if(responsejson.length!=0){
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responsejson),
					refreshing: false,
					trang: this.state.trang +1,
				});
			}
			
		})
		.catch((error)=>{
			console.log(error);
		});
	}

	render() {
	  return (
	    <ListView
	    	refreshControl={
	    		<RefreshControl
					refreshing={this.state.refreshing}
					onRefresh={this.loadNewData.bind(this)}
	    		 />
	    	}
			dataSource={this.state.dataSource}
			renderRow={(row)=>
				<View style={{padding:20, borderWidth:1}}>
					<Image source={{uri:row.hinh}} style={{width:70, height:70}} />
					<Text>{row.id}</Text>
				</View>
			}
	      />
	    );
	}

	componentDidMount(){

		fetch("http://192.168.1.87:3000/trang/"+this.state.trang)
		.then((response)=>response.json())
		.then((responsejson)=>{
			console.log(responsejson);
			this.setState({
			dataSource: this.state.dataSource.cloneWithRows(responsejson),
			trang: this.state.trang +1,
		});
		})
		.catch((error)=>{
			console.log(error);
		});

		
	}
}