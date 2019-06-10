import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './pages/Feed';
import PhotoAdd from './pages/PhotoAdd';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
 

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } }
}, {
        initialRouteName: 'Login'
    });

const loginOrProffileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
        initialRouteName: 'Auth'
    })

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor}></Icon>
        }
    },
    PhotoAdd: {
        name: 'PhotoAdd',
        screen: PhotoAdd,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor}></Icon>
        }
    },
    Profile: {
        name: 'profile',
        screen: loginOrProffileRouter,
        navigationOptions: {
            title: 'profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor}></Icon>
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;