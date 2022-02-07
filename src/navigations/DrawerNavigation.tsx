import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TodosScreen from '../screens/Todos/TodosScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import CalenderScreen from '../screens/Calender/CalenderScreen';
import {Text} from 'react-native';
import color from '../../theme/color';

export type DrawerParamList = {
  Todos: undefined;
  Calender: undefined;
  Settings: undefined;
};

export const DRAWER_NAVIGATION_SCREEN_NAMES: Record<
  string,
  keyof DrawerParamList
> = {
  Todos: 'Todos',
  Calender: 'Calender',
  Settings: 'Settings',
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
      drawerActiveBackgroundColor: color.lightPink,
    }}>
    <Drawer.Screen
      name={DRAWER_NAVIGATION_SCREEN_NAMES.Todos}
      component={TodosScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>할 일</Text>,
      }}
    />
    <Drawer.Screen
      name={DRAWER_NAVIGATION_SCREEN_NAMES.Calender}
      component={CalenderScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>달력</Text>,
      }}
    />
    <Drawer.Screen
      name={DRAWER_NAVIGATION_SCREEN_NAMES.Settings}
      component={SettingsScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>설정</Text>,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigation;
