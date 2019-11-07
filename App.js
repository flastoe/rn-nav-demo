import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { DrawerActions } from 'react-navigation-drawer';
import { Text, Button } from 'react-native';

import Screen from './Screen';
import { createDrawerNavigator } from 'react-navigation-drawer';

const BottomNavigator = createBottomTabNavigator({
  Home: Screen,
  Info: Screen,
  Profile: Screen,
}, {
  navigationOptions: ({ navigation }) => {
    return ({
      headerLeft: () => <Button title="Drawer" onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} />,
    })
  } 
});

const DrawerNavigation = createDrawerNavigator({
  Home: BottomNavigator,
  About: Screen,
  Settings: Screen,
},{
  navigationOptions: ({ navigation }) => {
    console.log('TAB', navigation.state);
    return ({
      headerLeft: () => <Button title="Drawer" onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }} />,
      title: navigation.state.routes[navigation.state.index].routeName
    })
  } 
})

const AppNavigator = createStackNavigator({
  
  Drawer: DrawerNavigation,
  Main: BottomNavigator,
});



export default createAppContainer(AppNavigator)
