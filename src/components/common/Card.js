import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
const Card = (props) => {
    return (//props.children으로 AlbumDetail의 Text가 내려온다.
        <View style ={styles.containerStyle}>
            {props.children}
        </View>
    );
};


Card.propTypes = {
    children:PropTypes.string
}
const styles = {
    containerStyle:{
        borderWidth: 1,//border 
        borderRadius: 2,//rounded corner edge
        borderColor: '#ddd',
        borderBottomWidth: 0,//
        shadowColor : '#000',
        shadowOffset: {width :0,height:2},
        shadowOpacity: 0.1,
        shadowRadius : 2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
};

export {Card};
