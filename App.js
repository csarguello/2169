import React, { useState, useEffect, useMemo } from 'react';
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
    false,false,false,false,false,
    false,false,false,false,false,false,false]);

  const scream = useMemo(() => ({
    value, setValue
  }), [value,setValue]);

  //const [sound, setSound] = useState();
  
   
  //   shard = false;
  // }

  //  useEffect(() => {
  //    return sound
  //    ? () => {
  //      console.log('Unloading sound');
  //      sound.unloadAsync();
  //    }
  //    : undefined;
  //  }, [sound]);

 

  return (
    <UserContext.Provider value={scream}>
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