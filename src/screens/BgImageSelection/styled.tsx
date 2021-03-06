import React, {useCallback, useMemo} from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {
  FlatList,
  Image,
  View,
  Platform,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import {useTheme} from '@emotion/react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import {launchImageLibrary} from 'react-native-image-picker';
import {showToast} from '../../utils/toastHandler';
import {BgImageObj, SelectImageFunction} from './useBgImageSelectionScreen';
import {getSourceOfBgImage} from '../../modules/bgImage';

const NUM_COLUMNS = 3;

type BgImagesProps = {
  images: BgImageObj[];
  selectImage: SelectImageFunction;
  refresh: () => void;
};

export const BgImages = React.memo(
  ({images, selectImage, refresh}: BgImagesProps) => {
    const {
      layout: {
        padding: {horizontal: paddingHorizontal, vertical: paddingVertical},
      },
    } = useTheme();
    const getMarginRight = useCallback(
      (index: number): number =>
        (index + 1) % NUM_COLUMNS === 0 ? 0 : paddingHorizontal,
      [paddingHorizontal],
    );
    const renderItem = useCallback(
      ({item: image, index}) =>
        image !== false ? (
          <BgImage
            image={image}
            style={{marginRight: getMarginRight(index)}}
            key={index}
            onPress={(event: GestureResponderEvent) => selectImage(image.path)}
            refresh={refresh}
          />
        ) : (
          <BgImageAddButton
            style={{marginRight: getMarginRight(index)}}
            refresh={refresh}
            selectImage={selectImage}
          />
        ),
      [getMarginRight, selectImage, refresh],
    );
    const itemSeparatorComponent = useCallback(() => <Seperator />, []);
    return (
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: paddingVertical + 20,
        }}
        style={{
          flex: 1,
          paddingVertical,
          paddingHorizontal,
          backgroundColor: 'white',
        }}
        data={[...images, false]}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
        numColumns={NUM_COLUMNS}
        initialNumToRender={12}
        removeClippedSubviews={true}
      />
    );
  },
);

const Seperator = styled.View`
  height: ${props => props.theme.layout.rowGap.toString()}px;
`;

type BgImageProps = {
  image: BgImageObj;
  style?: ReactNativeStyle;
  onPress: (event: GestureResponderEvent) => void;
  refresh: () => void;
};

const ItemContainer = styled.TouchableOpacity`
  flex: ${(1 / NUM_COLUMNS).toString()};
`;

const BgImage = React.memo(
  ({image, style = {}, onPress, refresh}: BgImageProps) => {
    const {
      layout: {aspectRatio},
    } = useTheme();
    const source = useMemo(() => getSourceOfBgImage(image.path), [image.path]);

    const deleteImage = useCallback(async () => {
      if (image.isSelected) {
        showToast(
          '?????? ?????????????????????. ?????? ??????????????? ????????? ?????? ?????? ??????????????????',
        );
      } else {
        await RNFS.unlink(image.path as string)
          .then(() => {
            showToast('???????????? ?????????????????????');
            refresh();
          })
          .catch(err => {
            showToast('????????? ?????????????????? ?????? ??????????????????');
          });
      }
    }, [image.isSelected, image.path, refresh]);

    const onLongPress = useCallback(
      (event: GestureResponderEvent) => {
        Alert.alert('?????? ???????????? ?????????????????????????', '', [
          {
            text: '???',
            onPress: () => {
              deleteImage();
            },
          },
          {
            text: '?????????',
            onPress: undefined,
          },
        ]);
      },
      [deleteImage],
    );
    return (
      <ItemContainer
        onPress={onPress}
        onLongPress={image.isCustom ? onLongPress : undefined}
        style={{...style}}>
        <Image
          source={source}
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio,
          }}
        />
        {image.isSelected && <SelectedBgImageIcon />}
      </ItemContainer>
    );
  },
);

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.icon.size.container.toString()}px;
  height: ${props => props.theme.icon.size.container.toString()}px;
  border-radius: ${props => (props.theme.icon.size.container / 2).toString()}px;
  ${props => props.theme.shadow.default};
`;

const SelectedBgImageIcon = React.memo(() => {
  const {
    icon: {
      size: {container: iconContainerSize, default: iconSize},
    },
  } = useTheme();
  return (
    <IconContainer
      style={css`
        background-color: orange;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: ${(-iconContainerSize / 2).toString()}px;
        margin-left: ${(-iconContainerSize / 2).toString()}px;
      `}>
      <FontAwesome5Icon name="check" color="white" size={iconSize} />
    </IconContainer>
  );
});

type BgImageAddButtonProps = {
  refresh: () => void;
  style?: ReactNativeStyle;
  selectImage: SelectImageFunction;
};

const BgImageAddButton = React.memo(
  ({style = {}, refresh, selectImage}: BgImageAddButtonProps) => {
    const {
      layout: {aspectRatio},
      icon: {
        size: {default: iconSize},
      },
      border: {lightGray: lightGrayBorder},
    } = useTheme();
    const onPress = useCallback(
      async () =>
        await launchImageLibrary(
          {
            mediaType: 'photo',
          },
          response => {
            if (response.assets && response.assets.length === 1) {
              const imagePath = `${
                RNFS.DocumentDirectoryPath
              }/${new Date().toISOString()}.jpg`.replace(/:/g, '-');
              const image = response.assets[0];
              if (Platform.OS === 'android') {
                RNFS.copyFile(image.uri as string, imagePath)
                  .then(res => {
                    showToast('???????????? ??????????????????');
                    selectImage(imagePath);
                    refresh();
                  })
                  .catch(err => {
                    showToast('???????????? ??????????????? ??????????????????');
                  });
              }
            }
          },
        ),
      [refresh, selectImage],
    );
    return (
      <ItemContainer style={style} onPress={onPress}>
        <View
          style={css`
            justify-content: center;
            align-items: center;
            flex: 1;
            aspect-ratio: ${aspectRatio.toString()};
            border-radius: 10px;
            ${lightGrayBorder('top', 'bottom', 'right', 'left')};
            border-width: 1.5px;
          `}>
          <IconContainer
            style={css`
              background-color: white;
            `}>
            <FontAwesome5Icon name="plus" color="orange" size={iconSize} />
          </IconContainer>
        </View>
      </ItemContainer>
    );
  },
);
