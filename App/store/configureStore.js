import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

const rootReducer = combineReducers(
                        { notes: notesReducer });

const persistConfig = { key: 'root',
                        storage: AsyncStorage
                      };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);


const getStore = () => store;
const getPersistor = () => persistor;

export {getStore, getPersistor}