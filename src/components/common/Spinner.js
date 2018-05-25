import React from 'react';
import { View, ActivityIndicator } from 'react-native';
//ActivityIndicator : spinner
const Spinner = ({size}) => {
    return (
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator size = {size|| 'large'}/>
            {/* props로 사이즈를 정해주지 않으면 large 정해주면 size */}
        </View>
    );
};

const styles = {
    spinnerStyle :{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',

    }
}

export { Spinner };