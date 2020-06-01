import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  firstLogin: false,
};

export default function client(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.firstLogin = action.payload.user.firstLogin;
        break;
      }
      case '@client/UPDATE_PROFILE_SUCCESS': {
        draft.firstLogin = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
