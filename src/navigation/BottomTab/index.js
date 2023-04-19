import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '~/constants/ScreenName';
import HomeScreen from '~/screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AnimationScreen from '~/screens/AnimationScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName={ScreenName.HOME_SCREEN}>
      <Tab.Screen
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? '#4F8EF7' : 'gray'} size={28} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={ScreenName.ANIMATION_SCREEN}
        component={AnimationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="bars" color={focused ? '#4F8EF7' : 'gray'} size={28} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
