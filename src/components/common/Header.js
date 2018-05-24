//import libraried for making a component
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
//make a component

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height: 60,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.2,
        elevation : 2,
        position : 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>;
        </View>
    );
    
};

Header.prototype ={
    headerText:PropTypes.string
}
/*
    Flex Box
    justifyContent: 'flex-end' 수직으로 맨 아래로 보냄
    justifyContent: 'center'
    justifyContent: 'flex-start' (default)

    alignItems:'flex-start' 수평으로 디폴트 위치
    alignItems:'flex-center' 수평으로 중간
    alignItems:'flex-end;
*/




//make th ecomponent available to other part of the app
export {Header};
