const initialState = {
  racesShedule: [],
  loadingData: true,
};

export const races = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHEDULE':
      return {
        ...state,
        racesShedule: action.racesShedule,
        loadingData: false,
      }
    case 'CHANGE_LOADING_SHEDULES_DATA_STATUS': {
      return {
        ...state,
        loadingData: true,
      }
    }
    default:
      return state;
    };
  };