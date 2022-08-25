import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routes/router';

export default function App() {
  return (
    <>      
      <StatusBar style='light' backgroundColor='#EA9685' translucent={true}/>
      <Routes/>
    </>
  );
}
