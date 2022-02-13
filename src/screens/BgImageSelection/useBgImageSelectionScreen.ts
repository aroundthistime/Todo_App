import {useDispatch, useSelector} from 'react-redux';
import RNFS, {ReadDirItem} from 'react-native-fs';
import {BgImage, bgImageSelector, changeBgImage} from '../../modules/bgImage';
import {range} from '../../utils/math';
import {useCallback, useEffect, useState} from 'react';
import {extractFileExtension} from '../../utils/fileHandlers';

export type BgImageObj = {
  isCustom: boolean;
  isSelected: boolean;
  path: BgImage;
};

export type SelectImageFunction = (image: BgImage) => void;

type ReturnType = {
  images: BgImageObj[];
  loading: boolean;
  selectImage: SelectImageFunction;
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
        isSelected: currentBgImage === n,
        path: n,
      };
    });
    await RNFS.readDir(RNFS.DocumentDirectoryPath).then(items => {
      items.forEach(item => {
        if (isBgImage(item)) {
          result.push({
            isCustom: true,
            isSelected: currentBgImage === item.path,
            path: item.path,
          });
        }
      });
    });
    setLoading(false);
    setImages(result);
  }, [currentBgImage, isBgImage]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return {
    images,
    loading,
    selectImage,
  };
};
