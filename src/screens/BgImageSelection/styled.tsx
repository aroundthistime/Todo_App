import React, {useCallback, useMemo} from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {FlatList, Image, View, Platform, Alert} from 'react-native';
import {useTheme} from '@emotion/react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import {launchImageLibrary} from 'react-native-image-picker';
import {showToast} from '../../utils/toastHandler';
import {BgImageObj} from './useBgImageSelectionScreen';

const NUM_COLUMNS = 3;

type BgImagesProps = {
  images: BgImageObj[];
};

export const BgImages = React.memo(({images}: BgImagesProps) => {
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
        />
      ) : (
        <BgImageAddButton />
      ),
    [getMarginRight],
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
});

const Seperator = styled.View`
  height: ${props => props.theme.layout.rowGap.toString()}px;
`;

type BgImageProps = {
  image: BgImageObj;
  style?: ReactNativeStyle;
};

const ItemContainer = styled.TouchableOpacity`
  flex: ${(1 / NUM_COLUMNS).toString()};
`;

const BgImage = React.memo(({image, style = {}}: BgImageProps) => {
  const {
    layout: {width, height},
  } = useTheme();
  const aspectRatio = useMemo(() => width / height, [width, height]);
  const deleteImage = () => {
    return (
      RNFS.unlink(path)
        .then(() => {
          console.log('FILE DELETED');
        })
        // `unlink` will throw an error, if the item to unlink does not exist
        .catch(err => {
          console.log(err.message);
        })
    );
  };
  const onLongPress = useCallback((event: GestureResponderEvent) => {
    Alert.alert('해당 이미지를 삭제하시겠습니까?', '', [
      {
        text: '예',
        onPress: () => {
          deleteImage();
        },
      },
      {
        text: '아니오',
        onPress: () => 1,
      },
    ]);
  }, []);
  return (
    <ItemContainer onPress={image.setToBgImage} style={{...style}}>
      <Image
        source={image.source}
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
});

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

const BgImageAddButton = React.memo(({style = {}}) => {
  const {
    icon: {
      size: {default: iconSize},
    },
    border: {lightGray: lightGrayBorder},
  } = useTheme();
  const onPress = useCallback(async () => {
    const result = await launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        console.log('RESPONSE', response);
        if (response.assets && response.assets.length === 1) {
          const imagePath = `${
            RNFS.DocumentDirectoryPath
          }/${new Date().toISOString()}.jpg`.replace(/:/g, '-');
          const image = response.assets[0];
          if (Platform.OS === 'android') {
            RNFS.copyFile(image.uri as string, imagePath)
              .then(res => {
                console.log('결과 : ', res);
              })
              .catch(err => {
                console.log('실패 ㅠ', err);
                showToast('이미지를 불러오는데 실패했습니다');
              });
          }
        }
      },
    );
  }, []);
  return (
    <ItemContainer style={style} onPress={onPress}>
      <View
        style={css`
          justify-content: center;
          align-items: center;
          flex: 1;
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
});
