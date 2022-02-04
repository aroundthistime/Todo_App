import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TodosScreen from '../screens/Todos/TodosScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import CalenderScreen from '../screens/Calender/CalenderScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Todos" component={TodosScreen} />
    <Drawer.Screen name="Calender" component={CalenderScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
