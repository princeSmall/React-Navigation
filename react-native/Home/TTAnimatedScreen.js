/**
 * @author: tongle
 *
 * @time: 2020-09-11 16:19
 *
 * @description: 动画
 *
 * @function:
 *
 */

import React from 'react'
import {Animated, View, Button, Text, Easing} from 'react-native'

export default class TTAnimatedScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TimingAnimated />
                <SpringAnimated />
            </View>
        )
    }
}

class SpringAnimated extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            springValue: new Animated.Value(100),
            springValueXY: new Animated.ValueXY({x: 100,y: 100}),
            enable: false,
        }
    }
    springAction = () => {
        this.setState({
            enable: true
        })
        Animated.spring(this.state.springValueXY,{
            toValue: {x: 200, y: 200},
            speed: 2,           //控制动画速度。默认值 12
            bounciness: 15,     //控制弹性。默认值 8
        }).start( ()=>{
            Animated.spring(this.state.springValueXY,{
                toValue: {x: 100, y: 100},
                tension: 20,      //控制速度。默认值 40.
                friction: 10,     //控制弹性/幅度。默认值 7。
            }).start(() => {
                this.setState({
                    enable: false
                })
                }
            )
            }
        )
    }
    render(){
        return (
            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    width: this.state.springValueXY.x,
                    height:this.state.springValueXY.y,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text >Spring动画</Text>
                </Animated.View>
                <Button title={'springAction'} onPress={this.springAction} disabled={this.state.enable}/>
            </View>
        )
    }
}

class TimingAnimated extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(1),
            sizeAnim: new  Animated.Value(100),
            moveAnim: new Animated.Value(0),
            decayAnim: new Animated.Value(0),
        }
    }
    /*timing opacity */
    fadeIn = () => {
        Animated.timing(this.state.fadeAnim,{
            toValue: 0,
            duration: 3000,
        }).start(() =>{
            Animated.timing(this.state.fadeAnim,{
                toValue: 1,
                duration: 3000,
            }).start((finished) =>{

            })
        });
    }
    /* timing size 缩放 */
    scaleSizeSmall = () => {
        Animated.timing(this.state.sizeAnim,{
            toValue: 10,
            duration: 2000,
        }).start(() =>{
            Animated.timing(this.state.sizeAnim,{
                toValue: 100,
                duration: 2000,
            }).start()
        })
    }
    /* timing move 移动*/
    moveTopTiming = () => {
        Animated.timing(this.state.moveAnim,{
            toValue: 200,               //最终值
            duration: 2000,              //持续时间
            delay: 1000,                 //延迟执行
            easing: Easing.back(1)    //缓动函数
        }).start((isFinish)=> {
            Animated.timing(this.state.moveAnim,{
                toValue: 0,                  //最终值
                duration: 2000,              //持续时间
                delay: 1000,                 //延迟执行
                easing: Easing.back(1)    //缓动函数
            }).start()
        })
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    width:this.state.sizeAnim,
                    height:this.state.sizeAnim,
                    top: this.state.moveAnim,
                    backgroundColor: 'green',
                    opacity:this.state.fadeAnim,
                    justifyContent: 'center',
                    left: this.state.decayAnim,
                }}>
                    <Text style={{alignSelf:'center'}}>Hello World</Text>
                </Animated.View>
                <Button title={'fadeInTiming'} onPress={this.fadeIn} />
                <Button title={'smallTiming'} onPress={this.scaleSizeSmall} />
                <Button title={'moveTopTiming'} onPress={this.moveTopTiming} />
            </View>
        )
    }
}
