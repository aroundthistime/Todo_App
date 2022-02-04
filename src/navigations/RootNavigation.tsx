import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import TodoFormScreen from '../screens/TodoForm/TodoFormScreen';
import TodoScreen from '../screens/Todo/TodoScreen';

const Stack = createStackNavigator();

const RootNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      title: '',
    }}>
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Todo" component={TodoScreen} />
    <Stack.Screen name="TodoForm" component={TodoFormScreen} />
  </Stack.Navigator>
);

export default RootNavigation;
