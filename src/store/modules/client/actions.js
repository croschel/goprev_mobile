export function updateProfileRequest(
  id,
  name,
  password,
  email,
  cpf,
  phone,
  target,
  profession,
  investiment,
  firstlogin
) {
  return {
    type: '@client/UPDATE_PROFILE_REQUEST',
    payload: {
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
    },
  };
}

export function updateProfileSuccess() {
  return {
    type: '@client/UPDATE_PROFILE_SUCCESS',
  };
}

export function updateProfileFailed() {
  return {
    type: '@client/UPDATE_PROFILE_SUCCESS',
  };
}
