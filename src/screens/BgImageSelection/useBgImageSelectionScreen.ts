import {useDispatch, useSelector} from 'react-redux';
import RNFS from 'react-native-fs';
import {
  BgImage,
  bgImageSelector,
  changeBgImage,
  getSourceOfBgImage,
} from '../../modules/bgImage';
import {GestureResponderEvent, ImageSourcePropType} from 'react-native';
import {range} from '../../utils/math';

export type BgImageObj = {
  source: ImageSourcePropType;
  isCustom: boolean;
  isSelected: boolean;
  setToBgImage: (event: GestureResponderEvent) => void;
};

type ReturnType = {
  images: BgImageObj[];
};

export const useBgImageSelectionScreen = (): ReturnType => {
  const currentBgImage = useSelector(bgImageSelector);
  const dispatch = useDispatch();
  const selectImage = (image: BgImage) => dispatch(changeBgImage(image));

  const images: BgImageObj[] = range(1, 6).map(n => {
    return {
      isCustom: false,
      source: getSourceOfBgImage(n),
      isSelected: currentBgImage === n,
      setToBgImage: (event: GestureResponderEvent) => selectImage(n),
    };
  });
  RNFS.readDirAssets(RNFS.DocumentDirectoryPath).then(items => {
    items.forEach(item => {
      console.log(item);
      images.push({
        isCustom: true,
        source: getSourceOfBgImage(item.path),
        isSelected: currentBgImage === item.path,
        setToBgImage: (event: GestureResponderEvent) => selectImage(item.path),
      });
    });
  });

  return {
    images,
  };
};
