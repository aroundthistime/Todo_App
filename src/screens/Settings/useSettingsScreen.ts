import {useNavigation} from '@react-navigation/native';
import VersionInfo from 'react-native-version-info';
import {HomeDrawerNavigationProp} from '../../navigations/types';

type ReturnType = {
  navigation: HomeDrawerNavigationProp;
  appVersion: string;
};

export const useSettingsScreen = (): ReturnType => {
  const navigation = useNavigation<HomeDrawerNavigationProp>();
  const {appVersion} = VersionInfo;
  return {
    navigation,
    appVersion,
  };
};
