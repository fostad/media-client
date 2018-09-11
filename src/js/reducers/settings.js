const settings = (state = {
  display: 'popular'
}, action) => {
  switch(action.type) {
  case 'UPDATE_DISPLAY':
    return Object.assign({}, state, {display: action.payload.display});
  case 'UPDATE_SETTING_BY_KEY':
    return Object.assign({}, state, {
      [action.payload.key]: action.payload.value
    });
  default:
    return state;
  }
};

export default settings;
