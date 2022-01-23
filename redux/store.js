import { createStore } from 'redux';
import reducer from './reducers/index.js';

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}