import React from 'react';
import styled from '@emotion/native';
import ViewContainer from '../../components/Layout/ViewContainer';

export const QuoteBackground = styled(ViewContainer)`
  background-color: lightcoral;
  padding-right: 20;
  padding-left: 20;
  padding-top: 20;
  padding-bottom: 20;
`;

export const QuoteMain = styled.View`
  flex: 1;
  justify-content: center;
`;

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
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

interface QuoteCloseButtonProps {
  onPress: Function;
  text: string;
}

export const QuoteCloseButton = (props: QuoteCloseButtonProps) => {
  return (
    <QuoteCloseButton.Container onPress={() => props.onPress()}>
      <QuoteCloseButton.Text>{props.text}</QuoteCloseButton.Text>
    </QuoteCloseButton.Container>
  );
};

QuoteCloseButton.Container = styled.TouchableOpacity`
  width: 200;
  padding-top: 15;
  padding-bottom: 15;
  justify-content: center;
  align-items: center;
`;

QuoteCloseButton.Text = styled.Text`
  color: white;
  font-size: 16;
  font-weight: bold;
`;
