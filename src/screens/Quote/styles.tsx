import React from 'react';
import styled from '@emotion/native';
import ViewContainer from '../../components/Layout/ViewContainer';

export const QuoteBackground = styled(ViewContainer)`
  background-color: lightcoral;
  padding-right: ${props => props.theme.layout.padding.horizontal};
  padding-left: ${props => props.theme.layout.padding.horizontal};
  padding-top: ${props => props.theme.layout.padding.vertical};
  padding-bottom: ${props => props.theme.layout.padding.vertical};
`;

export const QuoteMain = styled.View`
  flex: 1;
  justify-content: center;
`;

export const QuoteContent = styled.Text`
  font-size: ${props => props.theme.font.size.large};
  font-weight: bold;
`;

export const QuoteAuthor = styled.Text`
  font-size: ${props => props.theme.font.size.default};
  align-self: flex-end;
  margin-top: 50px;
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
  width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

QuoteCloseButton.Text = styled.Text`
  color: white;
  font-size: ${props => props.theme.font.size.small};
  font-weight: bold;
`;
