/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {getStore, getPersistor} from './App/store/configureStore';

import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';


const store = getStore();
const persistor = getPersistor();

const RNRedux = () => (
    <Provider store = { store }>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>   
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);
