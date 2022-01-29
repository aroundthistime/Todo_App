/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import 'react-native-gesture-handler';
import ViewContainer from './src/components/Layout/ViewContainer';
import Loader from './src/components/Loader';
import {useQuote} from './src/hooks/useQuote';
import Quote from './src/screens/Quote/Quote';

const App = () => {
  const {showQuote, closeQuote, closeQuoteFor24Hours} = useQuote();
  return (
    <SafeAreaView style={{flex: 1}}>
      {showQuote ? (
        <Suspense fallback={<Loader />}>
          <Quote
            closeQuote={closeQuote}
            closeQuoteFor24Hours={closeQuoteFor24Hours}
          />
        </Suspense>
      ) : (
        <ViewContainer>
          <Text>로그인됐지롱</Text>
        </ViewContainer>
      )}
    </SafeAreaView>
  );
};

export default App;
