import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(api.post, 'login', { cpf, password });

    const user = response.data;

    yield put(signInSuccess(user));
    Alert.alert('Login realizado com sucesso!');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, por favor verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, cpf, telefone, codeaffiliate, password } = payload;

    yield call(api.post, 'user', {
      name,
      email,
      cpf,
      telefone,
      codeaffiliate,
      password,
    });
    Alert.alert('Cadastro concluído com Sucesso');
    yield put(signUpSuccess());
  } catch (error) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, por favor verifiquer seus dados!'
    );
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
