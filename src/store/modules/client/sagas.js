import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailed } from './actions';

export function* updateProfile({ payload }) {
  console.tron.log(payload);
  try {
    const {
      id,
      name,
      password,
      email,
      cpf,
      phone,
      target,
      profession,
      investiment,
      firstlogin,
    } = payload;

    const response = yield call(api.put, 'login', {
      id,
      name,
      password,
      email,
      cpf,
      phone,
      target,
      profession,
      investiment,
      firstlogin,
    });
    const user = response.data;

    yield put(updateProfileSuccess(user));
  } catch (err) {
    yield put(updateProfileFailed());
  }
}

export default all([
  takeLatest('@client/UPDATE_PROFILE_REQUEST', updateProfile),
]);
