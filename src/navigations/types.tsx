import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {RootStackParamList} from './RootNavigation';
import {DrawerParamList} from './DrawerNavigation';

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type HomeDrawerNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  StackNavigationProp<RootStackParamList>
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeDrawerScreenProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeDrawerScreenGlobalProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList>,
  RootStackScreenProps<keyof RootStackParamList>
>;
