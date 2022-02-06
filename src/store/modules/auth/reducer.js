import produce from 'immer';

const INITIAL_STATE = {
  logged: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SET_AUTH': {
        draft.logged = action.payload;       
        break;
      }
      default:
    }
  });
}
