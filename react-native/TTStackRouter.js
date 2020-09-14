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
import TTAnimatedScreen from "./Home/TTAnimatedScreen";
import TTInterpolateAnimated from "./Home/TTInterpolateAnimated";
import TTEvenAnimated from "./Home/TTEvenAnimated";
import TTGroupAnimated from "./Home/TTGroupAnimated";

const NavigatorScreen = {
    TTHomeDetailScreen: {
        screen: TTHomeDetailScreen,
        navigationOptions:{
            title: '详情'
        }
    },
    TTAnimatedScreen: {
        screen: TTAnimatedScreen,
        navigationOptions:{
            title: '动画'
        }
    },
    TTInterpolateAnimated: {
        screen: TTInterpolateAnimated,
        navigationOptions:{
            title: 'interpolate'
        }
    },
    TTEvenAnimated: {
        screen: TTEvenAnimated,
        navigationOptions: {
            title: '跟踪手势'
        }
    },
    TTGroupAnimated: {
        screen: TTGroupAnimated,
        navigationOptions: {
            title: '组合动画'
        }
    }
}

export default NavigatorScreen;
