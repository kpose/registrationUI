import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native'

const SignUpScreen = () => {
    return (
        <View style = {styles.container}>
            <Text>SignUpScreen</Text>
            <Button
                title = 'Click Me'
                onPress = {() => alert('pressed')} />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});