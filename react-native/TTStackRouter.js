/**
 * @author: tongle
 *
 * @time: 2020-08-28 16:59
 *
 * @description: 跳转路由界面配置
 *
 * @function:
 *
 */

import React from 'react'
import TTHomeDetailScreen from "./Home/TTHomeDetailScreen";

const NavigatorScreen = {
    TTHomeDetailScreen: {
        screen: TTHomeDetailScreen,
        navigationOptions:{
            title: '详情'
        }
    },
}

export default NavigatorScreen;
