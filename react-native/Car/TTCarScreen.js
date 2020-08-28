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
import {Button, View} from 'react-native'

export default class TTCarScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('TTHomeDetailScreen')}
                />
            </View>
        )
    }
}
