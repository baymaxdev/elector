import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import A1 from './screens/A1';
import A2 from './screens/A2';

const AStackNavigator = StackNavigator(
    {
        a1: A1,
        a2: {
            screen: A2,
            navigationOptions: {
                drawerLockMode: 'locked-closed'
            }
        }
    },
    {
        initialRouteName: 'a1',
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
            cardStack: {gesturesEnabled: false}
        },
        headerMode: 'screen',
        lazyLoad: true
    }
);

export default AStackNavigator;
