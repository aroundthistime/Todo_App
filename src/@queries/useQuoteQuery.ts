import axios from 'axios';
import {useQuery} from 'react-query';
import {Quote} from '../@types/Quote';

const getQuoteOfTheDay = async (): Promise<Quote> => {
  const {data} = await axios.get('https://favqs.com/api/qotd');
  return {
    author: data.quote.author,
    content: data.quote.body,
  };
};

export const useQuoteQuery = () => {
  return useQuery(['quote'], getQuoteOfTheDay);
};
