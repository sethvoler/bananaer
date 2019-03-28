import Types from '../types';

export function logIn (status) {
  return {
    type: Types.LOG_IN,
    status: status,
  }
}

export function getPhone (user) {
  return {
    type: Types.GET_PHONE,
    user: user,
  }
}