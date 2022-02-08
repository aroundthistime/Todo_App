import React from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {ScrollView, View} from 'react-native';
import {useTheme} from '@emotion/react';

export const TodoForm = ({children}) => {
  const {
    layout: {
      padding: {vertical: verticalPadding, horizontal: horizontalPadding},
      rowGap,
    },
  } = useTheme();
  return (
    <ScrollView
      style={css`
        padding-right: ${horizontalPadding.toString()}px;
        padding-left: ${horizontalPadding.toString()}px;
        padding-top: ${verticalPadding.toString()}px;
        padding-bottom: ${verticalPadding.toString()}px;
        background-color: white;
        flex: 1;
      `}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          style: {
            marginBottom:
              index < React.Children.count(children) - 1 ? rowGap : 0,
          },
        }),
      )}
    </ScrollView>
  );
};

type TodoInputProps = {
  children: React.ReactNode;
  style?: ReactNativeStyle;
};

export const TodoInput = ({children, style = {}}: TodoInputProps) => (
  <View
    style={{
      ...css`
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
      `,
      ...style,
    }}>
    {children}
  </View>
);

TodoInput.Name = styled.Text`
  width: 80px;
  text-align: center;
  text-align-vertical: center;
  font-size: ${props => props.theme.font.size.default.toString()}px;
  padding-top: ${props => props.theme.textInput.padding.vertical.toString()}px;
`;

TodoInput.Input = styled.TextInput`
  flex: 1;
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
  background-color: white;
  border-radius: ${props => props.theme.layout.borderRadius.toString()}px;
  ${props => props.theme.border.lightGray('top', 'bottom', 'right', 'left')};
  font-size: ${props => props.theme.font.size.default.toString()}px;
  padding-top: ${props => props.theme.textInput.padding.vertical.toString()}px;
  padding-bottom: ${props =>
    props.theme.textInput.padding.vertical.toString()}px;
  padding-right: ${props =>
    props.theme.textInput.padding.horizontal.toString()}px;
  padding-left: ${props =>
    props.theme.textInput.padding.horizontal.toString()}px;
  max-height: ${props =>
    (
      props.theme.font.size.default * 12 +
      props.theme.textInput.padding.vertical * 2
    ).toString()}px;
`;
