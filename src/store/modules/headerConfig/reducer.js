import produce from 'immer';

const INITIAL_STATE = {
  show: true
};

export default function headerConfig(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@header/CHANGED_SHOW': {
        draft.show = action.payload;       
        break;
      }
      default:
    }
  });
}
