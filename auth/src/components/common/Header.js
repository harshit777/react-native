//import lib. for making components

import React from 'react';
import { Text, View } from 'react-native';
// make a componenet

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText} </Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 4
    },
    textStyle: {
        fontSize: 20
    }
};

//make component available to other parts of the app
export { Header };
