/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './redux/store';
import AppNavigator from './navigations';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100%',
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    // marginTop: 200,
    fontSize: 30,
  },
});

export default App;
