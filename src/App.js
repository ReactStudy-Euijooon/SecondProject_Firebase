import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
class App extends Component {

    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDN1nUZwpnjkMsg0T_45qw_Tp9rRgI3zSI',
            authDomain: 'reactsecondproject.firebaseapp.com',
            databaseURL: 'https://reactsecondproject.firebaseio.com',
            projectId: 'reactsecondproject',
            storageBucket: 'reactsecondproject.appspot.com',
            messagingSenderId: '849941135196'
        });
    };
    render() {
        return (
            <View>
                <Header headerText="Authentication">

                </Header>
                
                
                <LoginForm/>
            
                
            </View>
        );
    }
}

export default App;
