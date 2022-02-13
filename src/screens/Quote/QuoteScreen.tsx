import React from 'react';
import {useQuoteQuery} from '../../@queries/useQuoteQuery';
import {DrawerScreenBgImage} from '../../components/Layout/DrawerScreenContainer/styled';
import {
  QuoteAuthor,
  QuoteContainer,
  QuoteCloseButton,
  QuoteContent,
  QuoteFooter,
  QuoteMain,
} from './styled';

interface QuoteProps {
  closeQuote: Function;
  closeQuoteFor24Hours: Function;
}

const QuoteScreen = (props: QuoteProps): JSX.Element => {
  const {data} = useQuoteQuery();
  return (
    <DrawerScreenBgImage>
      <QuoteContainer>
        <QuoteMain>
          <QuoteContent>{data?.content}</QuoteContent>
          <QuoteAuthor>{data?.author}</QuoteAuthor>
        </QuoteMain>
        <QuoteFooter>
          <QuoteCloseButton onPress={props.closeQuote} text="닫기" />
          <QuoteCloseButton
            onPress={props.closeQuoteFor24Hours}
            text="24시간 동안 보지않기"
          />
        </QuoteFooter>
      </QuoteContainer>
    </DrawerScreenBgImage>
  );
};

export default React.memo(QuoteScreen);
