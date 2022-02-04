import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import TodoFormScreen from '../screens/TodoForm/TodoFormScreen';
import TodosScreen from '../screens/Todos/TodosScreen';

const Stack = createStackNavigator();

const RootNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Drawer" component={DrawerNavigation} />
    <Stack.Screen name="Todo" component={TodosScreen} />
    <Stack.Screen name="TodoForm" component={TodoFormScreen} />
  </Stack.Navigator>
);

export default RootNavigation;
