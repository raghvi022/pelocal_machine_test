
import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from "react-native-bootsplash";
import App_Navigator from './app_navigator';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);


  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureDirection: 'horizontal', }} animation="slide" headerMode='screen'>
      <Stack.Screen name="App_Navigator" component={App_Navigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
