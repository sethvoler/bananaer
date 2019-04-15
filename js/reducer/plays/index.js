import Types from '../../action/types';

const defatultState = {
  plays: 0,
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.PLAYS:
      return {
        ...state,
        plays: action.plays
      };
    default: 
      return state;
  }
}