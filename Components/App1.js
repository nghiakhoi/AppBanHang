import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, ListView, Image, RefreshControl, TextInput} from 'react-native';

export default class AppBanHang extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	hoten:"",
	  	username:"",
	  	password:"",
	  	result:"..."
	  };
	}

	clickPlus(){
		fetch("http://192.168.1.87:3000/dangky", {
			method:"POST",
			headers:{
				"Accept":"application/json",
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				"hoten":this.state.hoten,
				"username":this.state.username,
				"password":this.state.password,
			})
		})
		.then((response)=>response.json())
		.then((responseJson)=>{
			this.setState({result:responseJson.kq})
		})
		.catch((error)=>{
			console.log(error);
		});
	}

	render() {
	  return (
		<View style={styles.wrapper}>
			<TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(hoten) => this.setState({hoten})}
		        placeholder="Họ tên"
		        value={this.state.hoten}
		    />
		    <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(username) => this.setState({username})}
		        placeholder="Tài khoản"
		        value={this.state.username}
		    />
		    <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(password) => this.setState({password})}
		        placeholder="Mật khẩu"
		        value={this.state.password}
		    />
		    <TouchableOpacity style={styles.plus} onPress={()=>{this.clickPlus()}}>
		    	<Text style={styles.plusText}>Đăng ký</Text>
		    </TouchableOpacity>
		    <View style={styles.result}>
		    	<Text>{this.state.result}</Text>
		    </View>
		</View>
	    );
	}
}

var styles = StyleSheet.create({
	wrapper:{flex:1, backgroundColor:"yellow", padding:50},
	plus: {padding:30, backgroundColor:"black", justifyContent:"center", alignItems:"center"},
	plusText: {color:"white"},
	result: {padding:30, backgroundColor:"white", justifyContent:"center", alignItems:"center"},
});