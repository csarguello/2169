import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/homeScreen";
import Endless from "./screens/endless";
import Story from "./screens/story";
import Level from "./screens/level";
import { UserContext } from './userContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [value, setValue] = useState([true,false,false,false,false,
    false,false,false,false,false,
    false,false,false,false,false,
    false,false,false,false,false,
    false,false,false,false,false,
    false,false,false,false,false]);
  
  return (
    <UserContext.Provider value={{value,setValue}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Endless" component={Endless} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Level" component={Level} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}