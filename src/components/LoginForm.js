import React, { Component } from 'react';
import { TextInput,Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common'

var onChangeTextSending = function(LoginForm){

    
}

class LoginForm extends Component {

    state = { email: '',password:'',hidden:'*' };
 
    render() {
        return (
            <Card>
                <CardSection>
                 <Text style = {styles.labelStyle}>Email</Text>
                    <TextInput
                        placeholder = "user@gmail.com"
                
                        autoCorrect = {false}
                        value={this.state.email}
                        onChangeText={input => {this.setState({email:input})}}
                        style = {styles.inputStyle}
                    />

                </CardSection>
                <CardSection>
                    <Text style = {styles.labelStyle}>Password</Text>
                    <TextInput
                        secureTextEntry = {true}
                        placeholder = "password"
                        value = {this.state.password}
                        onChangeText = {input => {this.setState({password:input})}}
                        style = {styles.inputStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    inputStyle : {
        color : '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize : 18,
        lineHeight : 23,
        flex:2,

    },
    labelStyle : {
        fontSize : 18,
        paddingLeft:20,
        flex:1
    },
    containerStyle : {
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems : 'center'
    }
}

export default LoginForm;