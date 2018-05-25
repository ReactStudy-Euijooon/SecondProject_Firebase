import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
const CardSection = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

CardSection.prototype = {
    children:PropTypes.string
}

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', //default : column
        borderColor: '#ddd',
        position: 'relative'
    }
}

export {CardSection};