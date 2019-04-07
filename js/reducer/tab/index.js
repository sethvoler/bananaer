import Types from '../../action/types';

const defatultState = {
  tab: 'HomePage',
}

export default function onAction(state = defatultState, action) {
  switch (action.type) {
    case Types.GET_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    default: 
      return state;
  }
}