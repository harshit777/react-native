// android app component is a widget

//import a lib. to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//create a component
const App = () => (
        <Text>Some text</Text>
    );

//Render it to the device

AppRegistry.registerComponent('albums', () => App);
