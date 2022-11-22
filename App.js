import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4b0082" barStyle="dark-content"></StatusBar>
      <Routes/>
    </NavigationContainer>
  );
}


