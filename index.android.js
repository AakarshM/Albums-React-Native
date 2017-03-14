//index androidjs, place code here for android.
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component
const App = () => (
    <Text> Some Text </Text>
);

//render it to device.

AppRegistry.registerComponent('albums', () => App);
