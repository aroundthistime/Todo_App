import {createSelector} from '@reduxjs/toolkit';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {preventQuoteTill24Hours} from '../modules/quotePrevention';
import {RootState} from '../modules/root';
import {isBeforeCurrent} from '../utils/dates';

const quotePreventDeadlineSelector = (state: RootState) => {
  console.log('ㅇㅇ', state.quotePrevention);
  return state.quotePrevention.quotePreventedUntil;
};

const showQuoteSelector = createSelector(
  quotePreventDeadlineSelector,
  (quotePreventedUntil: number) =>
    isBeforeCurrent(new Date(quotePreventedUntil)),
);

export const useQuote = () => {
  const showQuoteInitialState: boolean = useSelector(showQuoteSelector);
  const [showQuote, setShowQuote] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowQuote(showQuoteInitialState);
  }, [showQuoteInitialState]);

  const closeQuote = () => {
    setShowQuote(false);
  };
  const closeQuoteFor24Hours = () => {
    dispatch(preventQuoteTill24Hours());
    closeQuote();
  };
  return {showQuote, closeQuote, closeQuoteFor24Hours};
};
