import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavBar from '../components/NavBar';

export default class A2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NavBar right='back' onRight={() => {
                    this.props.navigation.goBack()
                }}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 40, fontWeight: '500', color: 'black'}}>This is screen inside Stack A</Text>
                </View>
            </View>
        );
    }
}