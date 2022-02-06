import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TodosScreen from '../screens/Todos/TodosScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import CalenderScreen from '../screens/Calender/CalenderScreen';
import {Text} from 'react-native';
import color from '../../theme/color';
import routes from '../routes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
      drawerActiveBackgroundColor: color.lightPink,
    }}>
    <Drawer.Screen
      name={routes.Todos}
      component={TodosScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>할 일</Text>,
      }}
    />
    <Drawer.Screen
      name={routes.Calender}
      component={CalenderScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>달력</Text>,
      }}
    />
    <Drawer.Screen
      name={routes.Settings}
      component={SettingsScreen}
      options={{
        title: '',
        drawerLabel: () => <Text>설정</Text>,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigation;
