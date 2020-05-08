import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './src/containers/home/Home';
import Chat from './src/containers/chat/Chat';
import LogoTitle from './src/util/LogoTitle';

const Stack = createStackNavigator();

function App() {
  return (
   
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#4CB6ED',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
};

export default App;