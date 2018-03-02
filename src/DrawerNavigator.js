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

        })
    },
    screenB: {
        screen: BStackNavigator,
        navigationOptions: ({navigation}) => ({
            
        })
    },
};

const navigatorConfig = {
    // drawerWidth: Metrics.screenWidth * 0.7,
    initialRouteName: 'screenA',
    contentComponent: DrawerContent, // ({navigation}) => <DrawerContent navigation={navigation}/>,
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

class MainDrawerContainer extends Component {
    render() {
        return (
            <MainDrawerNavigator screenProps={{goBack: () => {
                this.props.navigation.goBack();
            }}}/>
        )
    }
}

export default MainDrawerContainer;