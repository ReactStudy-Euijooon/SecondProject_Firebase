import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common'

//TextInput 은 디폴트로 사이즈를 갖지 않기 때문에 이미지처럼 
//width, height를 설정해줘야 한다
class LoginForm extends Component {

    state = { inputText: '' };


    render() {
        return (
            <Card>
                <CardSection>
                    {/* 유저가 텍스트를 입력하면, onChangeText에 의해
                    state값이 변경되고 즉각적으로 rerender rerender된다.
                    rerender시의 값은 이미 이전에 저장한 state값으로 저장되어있기 때문에
                    직전에 저장한 값을 꺼내어 사용한다. TextInput은 값이 무엇인지 알지 못하고
                    다만 state에 저장된 값을 보여줄 뿐이다. */}
                    <Input
                        value = {this.state.inputText}
                        onChangeText ={text => this.setState({inputText:text})}
                        />

                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;