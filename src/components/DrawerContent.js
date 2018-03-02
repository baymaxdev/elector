import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {NavigationActions} from 'react-navigation';

export default class DrawerContent extends Component {

    _onPress = (index) => {
        if (index == 0) {
            this.props.navigation.navigate('screenA');
        } else if (index == 1) {
            this.props.navigation.navigate('screenB');
        } else {
            this.props.screenProps.goBack();
        }
    }
    _renderItem = (value, index) => {
        return (
            <View key={index} style={{height: 50}}>
                {
                    index != 0 &&
                    this._renderSeparator()
                }
                <TouchableOpacity onPress={() => {
                    this._onPress(index)
                }} style={styles.menu}>
                    <Text style={{marginLeft: 5}}>
                        {value}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderSeparator = () => {
        return (
            <View style={{marginVertical: 0, height: 0, width: '100%', backgroundColor: 'black'}}/>
        )
    }

    constructor(props) {
        super(props);
        this.state = {}
        this.titles = ['Screen A', 'Screen B', 'Go Back'];
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.titles.map(this._renderItem)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
});