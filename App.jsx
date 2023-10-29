import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home.jsx';
import Detail from './src/pages/detail.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Success from './src/pages/success.jsx';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
