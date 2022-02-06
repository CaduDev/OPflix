import { createStore, applyMiddleware } from 'redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers, midllewares) => {
  const enhancer = applyMiddleware(...midllewares);

  return createStore(reducers, enhancer);
};
