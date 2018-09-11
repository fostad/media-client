const topRateds = (state = [], action) => {
  switch(action.type) {
  case 'SAVE_TOP_RATEDS':
    return action.payload;
  default:
    return state;
  }
};

export default topRateds;
