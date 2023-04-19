import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {ScreenName} from '../constants/ScreenName';
import AnimationScreen from '../screens/AnimationScreen';
import PanResponderScreen from '../screens/PanResponderScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} /> */}
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.ANIMATION_SCREEN}
          component={AnimationScreen}
        />
        <Stack.Screen
          name={ScreenName.PAN_RESPONDER_SCREEN}
          component={PanResponderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
