/**
 * @author: tongle
 *
 * @time: 2020-08-28 16:20
 *
 * @description: 个人中心
 *
 * @function:
 *
 */

import React, {useState, useEffect} from 'react';
import {Button, View, Text, TextInput,StyleSheet} from 'react-native';

export default class TTMineScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* other code from before here */}
                {/*{Example()}*/}
                {/*{ExampleEffect()}*/}
                {ExampleProps({count: 1})}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('TTHomeDetailScreen')}
                />
            </View>
        )
    }
}
const ExampleEffect = () => {

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        alert("Keyboard Shown");
    };

    const _keyboardDidHide = () => {
        alert("Keyboard Hidden");
    };

    return <TextInput style={s.input} placeholder='Click here ...' onSubmitEditing={Keyboard.dismiss} />;
}


function ExampleProps(props) {
    const {count} = props;
    const handleClick = () =>{
        setTimeout(()=>{
            alert(count);
        },1000);
    };
    return (
        <View>
            <Button onPress={handleClick()} title={'click me'}></Button>
        </View>
    )
}


function Example() {
    const [count, setCount] = useState(0)
    // useEffect( ()=> {
    //
    // })
    return (
        <View>
            <Text>你点击了{count}次</Text>
            <Button onPress={()=>{
                setCount(count + 1)
            }} title={'Click me'}></Button>
        </View>
    )
}



const s = StyleSheet.create({
    input:{
        margin:60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#fff"
    }
})
