/**
 * @author: tongle
 *
 * @time: 2020-08-28 16:19
 *
 * @description: 购物车
 *
 * @function:
 *
 */

import React from 'react'
import {Button, View, Share} from 'react-native'

export default class TTCarScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onShare = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
                title: 'React-Native',
            });

            if (result.action === Share.sharedAction) {
                //表示内容已成功分享。
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed 表示对话框被取消。仅限 iOS。
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('TTHomeDetailScreen')}
                />
                <Button onPress={this.onShare} title="Share" />
            </View>
        )
    }
}
