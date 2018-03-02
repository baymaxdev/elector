import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let lb = null;
        if (this.props.right == 'back') {
            lb = <Image source={require('../../assets/back.png')} style={{width: 20, height: 20, margin: 5}}
                        resizeMode='contain'/>
        } else if (this.props.right == 'drawer') {
            lb = <Image source={require('../../assets/menu.png')} style={{width: 20, height: 20, margin: 5}}
                        resizeMode='contain'/>
        }

        return (
            <NavigationBar
                containerStyle={{
                    backgroundColor: '#283593'
                }}
                rightButton={
                    <TouchableOpacity style={{marginLeft: 10, alignSelf: 'center'}} onPress={this.props.onRight}>
                        {
                            lb
                        }
                    </TouchableOpacity>
                }
            />
        );
    }
}
