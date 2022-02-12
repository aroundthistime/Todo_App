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
import {LogBox, SafeAreaView} from 'react-native';
import Loader from './src/components/Loader/Loader';
import {useQuote} from './src/screens/Quote/useQuote';
import RootNavigation from './src/navigations/RootNavigation';
import QuoteScreen from './src/screens/Quote/QuoteScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const {showQuote, closeQuote, closeQuoteFor24Hours} = useQuote();
  return (
    <SafeAreaView style={{flex: 1}}>
      {showQuote ? (
        <Suspense fallback={<Loader />}>
          <QuoteScreen
            closeQuote={closeQuote}
            closeQuoteFor24Hours={closeQuoteFor24Hours}
          />
        </Suspense>
      ) : (
        <RootNavigation />
      )}
    </SafeAreaView>
  );
};

export default App;
