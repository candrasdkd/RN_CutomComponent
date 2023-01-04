import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardScreen, HomeScreen } from './screens/index'
import NavigationService from "./helpers/NavigationService";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cards" component={CardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
