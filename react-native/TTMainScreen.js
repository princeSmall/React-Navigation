/**
 * @author: tongle
 *
 * @time: 2020-08-27 17:53
 *
 * @description: 主界面
 *
 * @function:
 *
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image, Text} from 'react-native';
import React from 'react';
import NavigatorScreen from "./TTStackRouter";
import TTCarScreen from "./Car/TTCarScreen";
import TTHomeScreen from "./Home/TTHomeScreen";
import TTMineScreen from "./Mine/TTMineScreen";
import TTSettingScreen from "./Setting/TTSettingScreen";


const tabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: TTHomeScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={focused ? require('../image/home.png') : require('../image/unHome.png')}
                           style={{width: 25, height: 25}}/>
                ),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    defaultHandler()
                    console.log(navigation.state.routeName)
                },
            }
        },
        Car: {
            screen: TTCarScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={focused ? require('../image/car.png') : require('../image/unCar.png')}
                           style={{width: 25, height: 25}}/>
                ),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    defaultHandler()
                    console.log(navigation.state.routeName)
                }
            }
        },
        Mine: {
            screen: TTMineScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={focused ? require('../image/mine.png') : require('../image/unMine.png')}
                           style={{width: 25, height: 25}}/>
                ),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    defaultHandler()
                    console.log(navigation.state.routeName)
                }
            }
        },
        Settings: {
            screen: TTSettingScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => (
                    <Image source={focused ? require('../image/set.png') : require('../image/unSet.png')}
                           style={{width: 25, height: 25}}/>
                ),
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    defaultHandler()
                    console.log(navigation.state.routeName)
                },
            }
        }
    },
    {
        /* Other configuration remains unchanged */
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 14,
            },
            style: {
                backgroundColor: 'white',
            },

        },
    }
);

NavigatorScreen.mainScreen = {
    screen: tabNavigator,
    navigationOptions: {
        // headerShown: false,       // 隐藏header
        headerStyle: {
            elevation: 0,         // 移除 Android Header 阴影
            shadowOpacity: 0,     // 移除 iOS Header 阴影
        },
        headerTitleAlign: 'center',              // Android 标题居中
        headerBackTitleVisible: false,           // 隐藏 iOS 返回按钮标题
        headerPressColorAndroid: 'transparent',  // 移除 Android 点击返回按钮效果
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,   // 切换路由时水平动画
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // 切换路时 Header 动画
    },
};

// 给tabNavigator添加headerTitle
tabNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;

    return {
        headerTitle,
    };
};

const mainScreenStack = createStackNavigator(NavigatorScreen, {
    initialRouteName: 'mainScreen',
    defaultNavigationOptions: {
        headerBackTitleVisible: false,           // 隐藏 iOS 返回按钮标题
    }
});

const AppContainer = createAppContainer(mainScreenStack);


export default AppContainer;
