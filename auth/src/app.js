import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
    apiKey: 'AIzaSyDwT4xJz4MZ9DHG9O2V2TICPjRZUGFlWyc',
    authDomain: 'authentication-a1df2.firebaseapp.com',
    databaseURL: 'https://authentication-a1df2.firebaseio.com',
    projectId: 'authentication-a1df2',
    storageBucket: 'authentication-a1df2.appspot.com',
    messagingSenderId: '87124997868'
    });

    firebase.auth().onAuthStateChanged((user) => {
         if (user) {
             this.setState({ loggedIn: true });
         } else {
             this.setState({ loggedIn: false });
         }
    });
}

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.loadingStyle}>
                    <Spinner size="large" />
                    </View>);
        }
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

const styles = {
    loadingStyle: {
        marginTop: 240
    }
};

export default App;
