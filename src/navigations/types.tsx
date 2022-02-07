import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from './RootNavigation';
import {DrawerParamList} from './DrawerNavigation';

export type DrawerScreensNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  StackNavigationProp<RootStackParamList>
>;
