import Types from '../../action/types';

const defatultState = {
  status: 0,
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.LOG_IN:
      return {
        ...state,
        status: action.status,
      };
    case Types.LOG_OUT:
      return {
        ...state,
        status: action.status,
      };
    default: 
      return state;
  }
}