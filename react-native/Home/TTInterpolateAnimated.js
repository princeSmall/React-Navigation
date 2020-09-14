/**
 * @author: tongle
 *
 * @time: 2020-09-14 11:03
 *
 * @description: 插值动画（移动，旋转，缩放）
 *
 * @function:
 *
 */

import React from 'react'
import {Animated, Button, Text, View} from 'react-native'

export default class TTInterpolateAnimated extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interpolateGroup: new Animated.Value(0),
            interpolateRotate: new Animated.Value(0),
            interpolateRotateX: new Animated.Value(0),
        }
    }
    interpolateTiming = () =>{
        Animated.timing(this.state.interpolateGroup,{
            toValue: 1,
            duration: 2000,
        }).start()
    }
    interpolateRateTiming = () =>{
        Animated.timing(this.state.interpolateGroup,{
            toValue: 0,
            duration: 2000,
        }).start()
    }
    interpolateRotateTiming = () =>{
        Animated.timing(this.state.interpolateRotate,{
            toValue: 1,
            duration: 2000,
        }).start()
    }
    interpolateRotateBackTiming = () =>{
        Animated.timing(this.state.interpolateRotate,{
            toValue: 0,
            duration: 2000,
        }).start()
    }
    interpolateRotateXTiming = () =>{
        Animated.timing(this.state.interpolateRotateX,{
            toValue: 1,
            duration: 2000,
        }).start(()=>{
            Animated.timing(this.state.interpolateRotateX,{
                toValue: 0,
                duration: 2000,
            }).start()
        })
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    width:100,
                    height:100,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    transform:[{
                        rotateX: this.state.interpolateRotateX.interpolate({
                            inputRange: [0, 1],
                            outputRange:['0deg','360deg']
                        })
                    },
                        {
                            scale:this.state.interpolateRotateX.interpolate({
                                inputRange: [0, 1],
                                outputRange:[1, 0.2]
                            })
                        }
                    ]}}>
                    <Text style={{alignSelf:'center'}}>旋转缩放</Text>
                </Animated.View>
                <Button title={'interpolateRotateTiming'} onPress={this.interpolateRotateXTiming} />

                <Animated.View style={{
                    width:100,
                    height:100,
                    marginTop: 100,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    transform:[{
                        rotate: this.state.interpolateRotate.interpolate({
                            inputRange: [0, 1],
                            outputRange:['0deg','360deg']
                        })
                    },
                        {
                        scale:this.state.interpolateRotate.interpolate({
                            inputRange: [0, 1],
                            outputRange:[1, 0.2]
                        })
                    }
                    ]}}>
                    <Text style={{alignSelf:'center'}}>旋转缩放</Text>
                </Animated.View>
                <Button title={'interpolateRotateTiming'} onPress={this.interpolateRotateTiming} />
                <Button title={'interpolateRotateBackTiming'} onPress={this.interpolateRotateBackTiming} />

                <Animated.View style={{
                    width:100,
                    height:100,
                    marginTop: 50,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    transform:[{
                        rotate: this.state.interpolateGroup.interpolate({
                            inputRange: [0, 1],
                            outputRange:['0deg','360deg']
                        })
                    },{
                        scale:this.state.interpolateGroup.interpolate({
                            inputRange: [0, 1],
                            outputRange:[1,0.5]
                        })
                    },{
                        translateY: this.state.interpolateGroup.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150]  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    }
                    ]
                }}>
                    <Text style={{alignSelf:'center'}}>旋转缩放移动</Text>
                </Animated.View>
                <Button title={'interpolateTiming'} onPress={this.interpolateTiming} />
                <Button title={'interpolateRateTiming'} onPress={this.interpolateRateTiming} />
            </View>
        )
    }
}
