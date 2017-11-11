import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {

    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={{ height: 40,
                        width: null,
                        paddingBottom: 0,
                        paddingTop: 0,
                         borderWidth: 0 }}
                    />
                    
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;