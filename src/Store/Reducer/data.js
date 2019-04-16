import * as actionTypes from "../Action/types";

let initialState = {
  categories: [],
  menuItems:[]
};


export const MenuItems = (state, action) => {
    
  return {
    ...state,
    menuItems: action.data
  };
};

const reducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case 'data':
    return {...state,categories:action.data}
      console.log(`i am reducer`);
    case 'menuitems':
      return MenuItems(state, action);
    default:
      return state;
  }
};

export default reducer;
