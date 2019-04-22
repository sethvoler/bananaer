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

export function getPlays (plays) {
  return {
    type: Types.PLAYS,
    plays: plays,
  }
}

export function curTab (tab) {
  return {
    type: Types.GET_TAB,
    tab: tab,
  }
}

export function getToken (token) {
  return {
    type: Types.GET_TOKEN,
    token: token,
  }
}