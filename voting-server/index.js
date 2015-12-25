import createStore from './src/store';
import startServer from './src/server';


export const store = createStore();
startServer(store)

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
