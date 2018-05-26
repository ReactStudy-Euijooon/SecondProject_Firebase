import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
class App extends Component {

    state = { loggedIn: null };

    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDN1nUZwpnjkMsg0T_45qw_Tp9rRgI3zSI',
            authDomain: 'reactsecondproject.firebaseapp.com',
            databaseURL: 'https://reactsecondproject.firebaseio.com',
            projectId: 'reactsecondproject',
            storageBucket: 'reactsecondproject.appspot.com',
            messagingSenderId: '849941135196'
        });

        firebase.auth().onAuthStateChanged((user) => {
            //유저 로그인 상황을 알려주는 함수. 로그인 디면 user에 object가 들어오고
            //로그아웃 됐으면 null 혹은 undefined가 들어온

            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    };

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress = {()=>{firebase.auth().signOut()}}>
                        Log out
                </Button>
                );
            case false:
                return <LoginForm />
            default:
                return <Spinner size="small" />
        }

        if (this.state.loggedIn) {
            return (
                <Button >
                    Log out
                </Button>
            );
        }
        return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
