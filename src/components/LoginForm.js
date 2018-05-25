import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase';
var onChangeTextSending = function (LoginForm) {


}

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.onLoginFail = this.onLoginFail.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        //bind는 생성자 안에서 해줘야 에러 안나는듯
        //
    }


    state = { email: '', password: '', errorMessage: '', loading: false };
    onButtonPress() {

        const { email, password, errorMessage } = this.state;
        this.setState({ errorMessage: '', loading: true });


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{this.onLoginSuccess()})
            //.bind(this)를 하는 이유 : then이후는 언제 실행될 지 모르기 때문에
            // == context를 모르기 때문에 .bind(this)를 붙여줘야 함  
            //this.onLoginSuccess().bind(this)
            .catch(() => {
                //로그인 실패, 가입 시도

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(()=>{this.onLognSuccess()})
                    .catch(()=>{this.onLoginFail()});
                })
                //로그인 실패-> 가입 -> 가입도 실패 ->이때 에러메세지를 다시 띄워줘야 함!
                //re render해야 하는데 rerender할때는 state를 사용 한다.

    }

    onLoginFail() {

        this.setState({ errorMessage: 'Athentication Failed',loading:false });
    }

    onLoginSuccess() {
        /*로그인 성공시,
        1. 스피너 제거
        2. email, password 클리어  */
        this.setState({
            loading: false,
            email: '',
            password: '',
            errorMessage: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>
            Log in
                    </Button>
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

                <Text style={styles.errorTextStyle}>

                    {this.state.errorMessage};
                </Text>

                <CardSection>
                    {this.renderButton()}
                    {/* 경우에 따라 다른 뷰를 보여줘야 할때!
                    다른 뷰를 함수 안에 만들어 놓고 이 함수를 JSX안에서 호출!  */}
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
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}



export default LoginForm;