import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistReducer } from 'redux-persist';
// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'OPflix',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
