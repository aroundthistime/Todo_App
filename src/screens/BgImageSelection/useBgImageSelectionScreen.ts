import {useDispatch, useSelector} from 'react-redux';
import RNFS, {ReadDirItem} from 'react-native-fs';
import {
  BgImage,
  bgImageSelector,
  changeBgImage,
  getSourceOfBgImage,
} from '../../modules/bgImage';
import {GestureResponderEvent, ImageSourcePropType} from 'react-native';
import {range} from '../../utils/math';
import {useCallback, useEffect, useState} from 'react';
import {extractFileExtension} from '../../utils/fileHandlers';

export type BgImageObj = {
  isCustom: boolean;
  isSelected: boolean;
  path: string;
};

type ReturnType = {
  images: BgImageObj[];
  loading: boolean;
  selectImage: (image: BgImage) => void;
};

export const useBgImageSelectionScreen = (): ReturnType => {
  const currentBgImage = useSelector(bgImageSelector);
  const dispatch = useDispatch();
  const selectImage = useCallback(
    (image: BgImage) => dispatch(changeBgImage(image)),
    [dispatch],
  );
  const [images, setImages] = useState<BgImageObj[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const isBgImage = useCallback((dirItem: ReadDirItem): boolean => {
    return dirItem.isFile() && extractFileExtension(dirItem.name) === '.jpg';
  }, []);

  const getImages = useCallback(async () => {
    const result: BgImageObj[] = range(1, 8).map(n => {
      return {
        isCustom: false,
        source: getSourceOfBgImage(n),
        isSelected: currentBgImage === n,
      };
    });
    await RNFS.readDir(RNFS.DocumentDirectoryPath).then(items => {
      items.forEach(item => {
        if (isBgImage(item)) {
          console.log(getSourceOfBgImage(item.path));
          result.push({
            isCustom: true,
            source: getSourceOfBgImage(item.path),
            isSelected: currentBgImage === item.path,
          });
        }
      });
    });
    setLoading(false);
    setImages(result);
  }, [currentBgImage, isBgImage, selectImage]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  // const images: BgImageObj[] = range(1, 8).map(n => {
  //   return {
  //     isCustom: false,
  //     source: getSourceOfBgImage(n),
  //     isSelected: currentBgImage === n,
  //     setToBgImage: (event: GestureResponderEvent) => selectImage(n),
  //   };
  // });

  // RNFS.readDir(RNFS.DocumentDirectoryPath).then(items => {
  //   items.forEach(item => {
  //     if (isBgImage(item)) {
  //       console.log(item);
  //       images.push({
  //         isCustom: true,
  //         source: getSourceOfBgImage(item.path),
  //         isSelected: currentBgImage === item.path,
  //         setToBgImage: (event: GestureResponderEvent) =>
  //           selectImage(item.path),
  //       });
  //     }
  //   });
  // });

  return {
    images,
    loading,
  };
};
