import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase';
var onChangeTextSending = function (LoginForm) {


}

class LoginForm extends Component {

    state = { email: '', password: '', errorMessage: '' };
    onButtonPress() {
    
        const { email, password ,errorMessage} = this.state;
        this.setState({errorMessage:''});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                //로그인 실패, 가입 시도

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        //로그인 실패-> 가입 -> 가입도 실패 ->이때 에러메세지를 다시 띄워줘야 함!
                        //re render해야 하는데 rerender할때는 state를 사용 한다.
                        this.setState({ errorMessage: 'Athentication Failed' });
                    });
            })

    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput
                        placeholder="user@gmail.com"

                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={input => { this.setState({ email: input }) }}
                        style={styles.inputStyle}
                    />

                </CardSection>
                <CardSection>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={input => { this.setState({ password: input }) }}
                        style={styles.inputStyle}
                    />
                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    
                    {this.state.errorMessage};
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorTextStyle : {
        fontSize:20,
        alignSelf: 'center',
        color : 'red'
    }
}



export default LoginForm;