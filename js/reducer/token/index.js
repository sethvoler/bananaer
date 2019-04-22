import Types from '../../action/types';

const defatultState = {
  token: '',
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default: 
      return state;
  }
}