import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import NavBar from '../components/NavBar';

export default class InitialScreen extends Component {

    state = {
        text: 'TEXT'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NavBar/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        style={{padding: 10, borderRadius: 10, backgroundColor: 'green'}}
                        onPress={
                            () => {
                                this.props.navigation.navigate('drawer');
                            }
                        }>
                        <Text style={{fontSize: 40, fontWeight: '500', color: 'black'}}>Go to Drawer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}