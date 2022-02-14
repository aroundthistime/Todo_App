import React from 'react';
import {useQuoteQuery} from '../../@queries/useQuoteQuery';
import BgImageContainer from '../../components/Layout/BgImageContainer/BgImageContainer';
import Loader from '../../components/Loader/Loader';
import {
  QuoteAuthor,
  QuoteCloseButton,
  QuoteContent,
  QuoteFooter,
  QuoteMain,
} from './styled';
import {useQuoteScreen} from './useQuoteScreen';

interface QuoteProps {
  closeQuote: Function;
  closeQuoteFor24Hours: Function;
}

const QuoteScreen = (props: QuoteProps) => {
  const {data, isLoading} = useQuoteQuery();
  const {containerStyle} = useQuoteScreen();
  return (
    <BgImageContainer style={containerStyle}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </BgImageContainer>
  );
};

export default React.memo(QuoteScreen);
