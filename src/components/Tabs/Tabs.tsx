import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import TabsDivider from '../Layout/TabsDivider/TabsDivider';
import styled from '@emotion/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Tabs = ({children}) => {
  const renderItem = useCallback(({item}) => item, []);
  const itemSperatorComponent = useCallback(() => <TabsDivider />, []);
  return (
    <FlatList
      style={{flex: 1}}
      data={children}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSperatorComponent}
    />
  );
};

type ItemProps = {
  children?: React.ReactElement | React.ReactElement[];
  onPress?: Function;
};

Tabs.Item = ({children, onPress}: ItemProps) => {
  const itemContent = <ItemContainer>{children}</ItemContainer>;
  return onPress ? (
    <TouchableOpacity onPress={() => onPress()}>{itemContent}</TouchableOpacity>
  ) : (
    itemContent
  );
};

Tabs.Text = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
`;

Tabs.ItemIcon = styled.View`
  margin-right: ${props => props.theme.layout.columnGap.toString()}px;
`;

Tabs.ItemContent = ({children}) => (
  <ContentText numberOfLines={1}>{children}</ContentText>
);

Tabs.RightSection = styled.View`
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
`;

Tabs.RightArrowIcon = () => (
  <FontAwesome5Icon name="chevron-right" size={20} color="rgba(0, 0, 0, 0.7)" />
);

const ItemContainer = styled.View`
  width: 100%;
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
`;

const ContentText = styled(Tabs.Text)`
  flex: 1;
`;

export default Tabs;
