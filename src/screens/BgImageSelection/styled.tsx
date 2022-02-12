import React, {useCallback, useMemo} from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@emotion/react';

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
      />
    ),
    [getMarginRight],
  );
  const keyExtractor = useCallback(({item: image}) => image, []);
  const itemSeparatorComponent = useCallback(() => <Seperator />, []);
  return (
    <FlatList
      contentContainerStyle={{flexGrow: 1}}
      style={{
        flex: 1,
        paddingVertical,
        paddingHorizontal,
      }}
      data={images}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparatorComponent}
      numColumns={NUM_COLUMNS}
    />
  );
});

const Seperator = styled.View`
  height: ${props => props.theme.layout.rowGap.toString()}px;
`;

type BgImageProps = {
  image: any;
  //   image : string;
  onPress: Function;
  style?: ReactNativeStyle;
};

export const BgImage = React.memo(
  ({image, onPress, style = {}}: BgImageProps) => {
    const {
      layout: {width, height},
    } = useTheme();
    const aspectRatio = useMemo(() => width / height, [width, height]);
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        style={{flex: 1 / NUM_COLUMNS, ...style}}>
        <Image
          source={image}
          resizeMode={'cover'}
          style={{width: '100%', height: undefined, aspectRatio}}
        />
        {/* <Image source={{uri: image}} style={{width: 30}} /> */}
      </TouchableOpacity>
    );
  },
);
