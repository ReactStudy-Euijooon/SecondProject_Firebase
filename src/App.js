import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
class App extends Component {

    state = {loggedIn : false};

    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDN1nUZwpnjkMsg0T_45qw_Tp9rRgI3zSI',
            authDomain: 'reactsecondproject.firebaseapp.com',
            databaseURL: 'https://reactsecondproject.firebaseio.com',
            projectId: 'reactsecondproject',
            storageBucket: 'reactsecondproject.appspot.com',
            messagingSenderId: '849941135196'
        });

        firebase.auth().onAuthStateChanged((user)=>{

            if(user){
                this.setState({loggedIn : true});
            }
            else{
                this.setState({loggedIn : false});
            }
            //유저 로그인 상황을 알려주는 함수. 로그인 디면 user에 object가 들어오고
            //로그아웃 됐으면 null 혹은 undefined가 들어온
        });
    };
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>

                <LoginForm />


            </View>
        );
    }
}

export default App;
