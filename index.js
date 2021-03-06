import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import Asyncstorage from '@react-native-async-storage/async-storage';
import rootReducer from './src/modules/root';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from '@emotion/react';
import {RootSiblingParent} from 'react-native-root-siblings';
import 'react-native-gesture-handler';

import theme from './theme';
import {NavigationContainer} from '@react-navigation/native';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: Asyncstorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

const queryClient = new QueryClient();

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootSiblingParent>
              <App />
            </RootSiblingParent>
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
