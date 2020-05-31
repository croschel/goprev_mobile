import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'goprev',
      storage: AsyncStorage,
      whitelist: ['auth', 'client'],
    },
    reducers
  );
  return persistedReducer;
};
