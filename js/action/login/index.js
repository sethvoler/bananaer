import Types from '../types';

export function logIn (status) {
  return {
    type: Types.LOG_IN,
    status: status,
  }
}