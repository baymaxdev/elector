import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavBar from '../components/NavBar';

export default class B1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NavBar right='drawer' onRight={() => {
                    this.props.navigation.navigate('DrawerOpen')
                }}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                    <TouchableOpacity style={{padding: 10, borderRadius: 10, backgroundColor: 'green'}} onPress={() => {
                        this.props.navigation.navigate('b2');
                    }}>
                        <Text style={{fontSize: 40, fontWeight: '500', color: 'black'}}>Go to Next Screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}