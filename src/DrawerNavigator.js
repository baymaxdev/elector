import {DrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {View} from 'react-native';
import DrawerContent from './components/DrawerContent';
import AStackNavigator from './AStackNavigator';
import BStackNavigator from './BStackNavigator';

const routeConfigs = {
    screenA: {
        screen: AStackNavigator,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
    screenB: {
        screen: BStackNavigator,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    },
};

const navigatorConfig = {
    // drawerWidth: Metrics.screenWidth * 0.7,
    initialRouteName: 'screenA',
    contentComponent: ({navigation}) => <DrawerContent navigation={navigation}/>,
    contentOptions: {
        // activeTintColor: Colors.whiteColor,
        // inactiveTintColor: Colors.brandPrimary,
        indicatorStyle: {height: 0},
        scrollEnabled: false
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerPosition: 'right'
};

const MainDrawerNavigator = DrawerNavigator(routeConfigs, navigatorConfig);

export default MainDrawerNavigator;