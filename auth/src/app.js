import React, { Component } from 'react';
import { View, } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componenetWillMount() {
        firebase.intializeApp({

                apiKey: 'AIzaSyC8_c-X01rQayaOVUlsmkr5r0sA2TeYxqs',
                authDomain: 'authentication-423ff.firebaseapp.com',
                databaseURL: 'https://authentication-423ff.firebaseio.com',
                projectId: 'authentication-423ff',
                storageBucket: 'authentication-423ff.appspot.com',
                messagingSenderId: '346024549639'
        });
    }

    render() {
        return (
        <View>
            <Header headerText="Authenticaion" />
            <LoginForm />
        </View>
    );
    }
}

export default App;
