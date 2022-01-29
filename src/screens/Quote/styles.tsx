import React from 'react';
import styled from '@emotion/native';
import ViewContainer from '../../components/Layout/ViewContainer';
import {Text, TouchableOpacity} from 'react-native';

export const QuoteBackground = styled(ViewContainer)`
  background-color: lightcoral;
  padding-right: 20;
  padding-left: 20;
  padding-top: 10;
  padding-bottom: 10;
`;

export const QuoteMain = styled.View``;

export const QuoteContent = styled.Text`
  font-size: 25;
  font-weight: bold;
`;

export const QuoteAuthor = styled.Text`
  font-size: 18;
  align-self: flex-end;
  margin-top: 50;
`;

export const QuoteFooter = styled.View`
  justify-self: flex-end;
`;

interface QuoteCloseButtonProps {
  onPress: Function;
  text: string;
}

export const QuoteCloseButton = (props: QuoteCloseButtonProps) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};
