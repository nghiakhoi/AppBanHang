import React, { Component } from 'react';
import {
    TouchableOpacity, Text, View
} from 'react-native';
import Drawer from 'react-native-drawer';


export default class AppBanHang extends Component {

    closeControlPanel = () => {
        this._drawer.close();
    };
    openControlPanel = () => {
        this._drawer.open();
    };

    render() {
        return (
            <Drawer
                openDrawerOffset={0.5}
                tapToClose
                ref={(ref) => { this._drawer = ref; }}
                content={
                    <View style={{ flex: 1, backgroundColor: 'yellow' }} />
                }
            >
                <View style={{ flex: 1, backgroundColor: 'red', padding: 50 }}>
                    <TouchableOpacity onPress={() => { this.openControlPanel(); }}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </View>
            </Drawer>
        );
    }
}
