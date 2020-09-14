/**
 * @author: tongle
 *
 * @time: 2020-09-14 14:04
 *
 * @description: 组合动画
 *
 * @function:
 *
 */

import React from 'react'
import {Animated, Button, Text, View} from 'react-native'

export default class TTGroupAnimated extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
                <ParallelAnimated />
                <SequenceAnimated />
            </View>
        )
    }
}

//多个动画可以通过parallel（同时执行）
class ParallelAnimated extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            springValueXY: new Animated.ValueXY({x: 100, y: 100}),
            timingValue: new  Animated.Value(1),
            enable: false
        }
    }


    parallelAction = () => {
        this.setState({
            enable: true
        })
        Animated.parallel([
            Animated.spring(this.state.springValueXY,{
                toValue: {x: 200, y: 200},
                speed: 1,
            }),
            Animated.timing(this.state.timingValue,{
                toValue: 0,
                duration:500,
            })
        ]).start(() => {

            Animated.parallel([
                Animated.spring(this.state.springValueXY,{
                    toValue: {x: 100, y: 100},
                    speed: 10,
                }),
                Animated.timing(this.state.timingValue,{
                    toValue: 1,
                    duration:2000,
                })
            ]).start(() => {

                this.setState({
                    enable: false
                })
            })
        })
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    width: this.state.springValueXY.x,
                    height: this.state.springValueXY.y,
                    opacity: this.state.timingValue,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text >Spring动画</Text>
                </Animated.View>
                <Button title={'parallelAction'} onPress={this.parallelAction} disabled={this.state.enable}/>
            </View>
        )
    }
}

// 多个动画可以通过sequence（顺序执行）
class SequenceAnimated extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enable: false,
            springValueXY: new Animated.ValueXY({x: 100, y: 100}),
            timingValue: new  Animated.Value(1),
        }
    }

    sequenceAction = () => {
        this.setState({
            enable: true
        })
        Animated.sequence([
            Animated.spring(this.state.springValueXY,{
                toValue: {x: 200, y: 200},
                speed: 1,
            }),
            Animated.timing(this.state.timingValue,{
                toValue: 0,
                duration:500,
            })
        ]).start(() => {

            Animated.parallel([
                Animated.spring(this.state.springValueXY,{
                    toValue: {x: 100, y: 100},
                    speed: 10,
                }),
                Animated.timing(this.state.timingValue,{
                    toValue: 1,
                    duration:2000,
                })
            ]).start(() => {

                this.setState({
                    enable: false
                })
            })
        })
    }
    render(){
        return (
            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    width: this.state.springValueXY.x,
                    height: this.state.springValueXY.y,
                    opacity: this.state.timingValue,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text >Spring动画</Text>
                </Animated.View>
                <Button title={'sequenceAction'} onPress={this.sequenceAction} disabled={this.state.enable}/>
            </View>
        )
    }
}
