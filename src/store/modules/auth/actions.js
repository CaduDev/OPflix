export function setLogin(data) {
  return {
    type: '@auth/SET_AUTH',
    payload: data,
  };
}