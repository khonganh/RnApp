import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '~/constants/ScreenName';
import HomeScreen from '~/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabBarItem = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.HOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabBarItem;
