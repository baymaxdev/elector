import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import InitialScreen from './screens/initialScreen';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = StackNavigator(
    {
        init: InitialScreen,
        drawer: DrawerNavigator
    },
    {
        initialRouteName: 'init',
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
            cardStack: {gesturesEnabled: false}
        },
        headerMode: 'screen',
        lazyLoad: true
    }
);

export default AppNavigator;
