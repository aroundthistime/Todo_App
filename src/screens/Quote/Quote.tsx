import React from 'react';
import {useQuoteQuery} from '../../@queries/useQuoteQuery';
import {
  QuoteAuthor,
  QuoteBackground,
  QuoteCloseButton,
  QuoteContent,
  QuoteFooter,
  QuoteMain,
} from './styles';

interface QuoteProps {
  closeQuote: Function;
  closeQuoteFor24Hours: Function;
}

const Quote = (props: QuoteProps): JSX.Element => {
  const {data} = useQuoteQuery();
  return (
    <QuoteBackground>
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
    </QuoteBackground>
  );
};

export default React.memo(Quote);
