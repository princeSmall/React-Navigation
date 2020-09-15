/**
 * @author: tongle
 *
 * @time: 2020-08-28 16:20
 *
 * @description: 主页
 *
 * @function:
 *
 */

import React from 'react'
import {View, FlatList, Text, TouchableOpacity, Appearance} from 'react-native'

export default class TTHomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: [
                {
                    name:'timing/springAnimated',
                    id: '0',
                    screen:'TTAnimatedScreen',
                }, {
                    name:'interpolateAnimated',
                    id: '1',
                    screen: 'TTInterpolateAnimated'
                }, {
                    name:'evenAnimated',
                    id: '2',
                    screen: 'TTEvenAnimated'
                }, {
                    name:'groupAnimated',
                    id: '3',
                    screen: 'TTGroupAnimated'
                }
            ],
        }
        this.renderItem = this.renderItem.bind(this)
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark'){
            console.log('...dark')
        }else if (colorScheme === 'light'){
            console.log('...light')
        }
    }

    renderItem = ({item}) => (
        <TouchableOpacity style={{
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,}} onPress={event => {
            this.props.navigation.navigate(item.screen)
        }}>
            <Text style={{fontSize: 32,}}>{item.name}</Text>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={()=>{
                        return (
                            <View style={{justifyContent: 'center',alignItems: 'center',height: 50}}>
                                <Text>基础动画</Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}
