import React, { useState, useMemo } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/homeScreen";
import Endless from "./screens/endless";
import Story from "./screens/story";
import Level from "./screens/level";
import { UserContext } from './userContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState('light');

  const firstMemo = useMemo(() => ({
    theme, setTheme
  }), [theme,setTheme]);

  return (
    <UserContext.Provider value={firstMemo}>
    <NavigationContainer theme={theme == 'light' ? DefaultTheme : DarkTheme}>
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