/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import store from './src/redux'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigators'

const App = () => {
  return (
    <Provider store = {store} >
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
