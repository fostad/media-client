export const savePopularMovies = payload => ({
  type: "SAVE_POPULAR_MOVIES",
  payload: payload
});

export const saveTopRateds = payload => ({
  type: "SAVE_TOP_RATEDS",
  payload: payload
});

export const updateDisplay = payload => ({
  type: "UPDATE_DISPLAY",
  payload: payload
});

export const updateSettingByKey = payload => ({
  type: "UPDATE_SETTING_BY_KEY",
  payload: payload
});
