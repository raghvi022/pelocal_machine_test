import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../screens/HomeScreen';
const Stack = createNativeStackNavigator();

const App_Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: "horizontal",
      }}
      initialRouteName={"HomeScreen"}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default App_Navigator;
