import React, {useCallback, useMemo} from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@emotion/react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const NUM_COLUMNS = 3;

type BgImagesProps = {
  images: string[];
  //   images: any[];
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
    ({item: image, index}) => (
      <BgImage
        image={image}
        onPress={() => 1}
        style={{marginRight: getMarginRight(index)}}
        key={index}
        isSelected={true}
      />
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
      data={images}
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
  image: any;
  //   image : string;
  isSelected: boolean;
  onPress: Function;
  style?: ReactNativeStyle;
};

const ItemContainer = styled.TouchableOpacity`
  flex: ${(1 / NUM_COLUMNS).toString()};
`;

const BgImage = React.memo(
  ({image, isSelected, onPress, style = {}}: BgImageProps) => {
    const {
      layout: {width, height},
    } = useTheme();
    const aspectRatio = useMemo(() => width / height, [width, height]);
    return (
      <ItemContainer onPress={() => onPress()} style={{...style}}>
        <Image
          source={image}
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio,
            borderColor: 'orange',
            borderWidth: 5,
          }}
        />
        {isSelected && <SelectedBgImageIcon />}
        {/* <Image source={{uri: image}} style={{width: 30}} /> */}
      </ItemContainer>
    );
  },
);

const SelectedBgImageIcon = React.memo(() => {
  const {
    icon: {
      size: {default: iconSize},
    },
  } = useTheme();
  const iconContainerSize = useMemo(() => iconSize + 10, [iconSize]);
  return (
    <View
      style={css`
        background-color: orange;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: ${iconContainerSize.toString()}px;
        height: ${iconContainerSize.toString()}px;
        border-radius: ${(iconContainerSize / 2).toString()}px;
        top: 50%;
        left: 50%;
        margin-top: ${(-iconContainerSize / 2).toString()}px;
        margin-left: ${(-iconContainerSize / 2).toString()}px;
      `}>
      <FontAwesome5Icon name="check" color="white" size={30} />
    </View>
  );
});

// const BgImageAddButton = React.memo(({style = {}}) => {
//   const {
//     layout: {width, height},
//   } = useTheme();
//   const aspectRatio = useMemo(() => width / height, [width, height]);
//   return (
//     <ItemContainer style={style}>
//       <View
//         style={css`
//           justify-content: center;
//           align-items: center;
//           background-color: orange;
//         `}>
//         <Text>1</Text>
//       </View>
//     </ItemContainer>
//   )
// });
