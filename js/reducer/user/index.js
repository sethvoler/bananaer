import Types from '../../action/types';

const defatultState = {
  user: {
    confirmPwd: '',
    inviteCode: '',
    mobile: '',
    pwd: '',
    smsCode: ''
  },
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.GET_PHONE:
      return {
        ...state,
        user: action.user,
      };
    // case Types.LOG_OUT:
    //   return {
    //     ...state,
    //     status: action.status,
    //   };
    default: 
      return state;
  }
}