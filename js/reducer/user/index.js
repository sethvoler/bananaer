import Types from '../../action/types';

const defatultState = {
  user: {
    confirmPwd: '',
    inviteCode: '',
    mobile: '',
    pwd: '',
    smsCode: '',
    createTime: '',
    headPic: null,
    id: 0,
    inviteCode: '',
    isAdmin: null,
    lastModifyTime: '',
    memberExpireDate: null,
    nickName: null,
    password: '',
    proxy_user_id: null,
    sex: null,
    shortDes: null,
    userName: '',
  },
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.GET_PHONE:
      return {
        ...state,
        user: action.user,
      };
    default: 
      return state;
  }
}