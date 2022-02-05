import React from 'react';

import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Header } from './src/components/Header';

import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/Home';
import { Feed } from './src/screens/Feed';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="SingIn" 
            component={SingIn} 
            options={{ 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="Feed" 
            component={Feed} 
            options={{ 
              // headerShown: false,
            }} 
          />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}