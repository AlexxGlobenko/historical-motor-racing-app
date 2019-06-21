const initialState = {
  onePageDriversArray: [],
  loadingData: true,
  lastPage: false,
  firstPage: true,
};

export const drivers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DRIVERS':
      return {
        ...state,
        onePageDriversArray: action.drivers,
        lastPage: action.lastPage,
        firstPage: action.firstPage,
        loadingData: false,
        driversUrl: action.driversUrl,
      }
    case 'CHANGE_LOADING_DATA_STATUS':
      return {
        ...state,
        loadingData: true,
      }
    case 'GET_MORE_INFO_ABOUT_DRIVER':
      return {
        ...state,
        moreInfoAboutDriver: action.moreInfoAboutDriver,
      }
    default:
      return state;
    };
  };