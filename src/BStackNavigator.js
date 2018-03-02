import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import B1 from './screens/B1';
import B2 from './screens/B2';

const BStackNavigator = StackNavigator(
    {
        b1: B1,
        b2: {
            screen: B2,
            navigationOptions: {
                drawerLockMode: 'locked-closed'
            }
        }
    },
    {
        initialRouteName: 'b1',
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
            cardStack: {gesturesEnabled: false}
        },
        headerMode: 'screen',
        lazyLoad: true
    }
);

export default BStackNavigator;
