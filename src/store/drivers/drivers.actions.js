import axios from 'axios';
const GET_DRIVERS = 'GET_DRIVERS';
const CHANGE_LOADING_DATA_STATUS = 'CHANGE_LOADING_DATA_STATUS';

// change loading status for displaying or not displaying loading spinner
export const changeLodaingDataStatus = () => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LOADING_DATA_STATUS,
    })
  }
}

/**
 * @param {offset for pagination} offset 
 */
export const getDrivers = (offset = 0) => {
  return async (dispatch) => {
    try {
      const driversResponse = await axios({
        method: 'get',
        url: `http://ergast.com/api/f1/drivers.json?limit=30&offset=${offset}`,
      });
      const driversUrl = [];
      const drivers = driversResponse.data.MRData.DriverTable.Drivers.map((driverObj) => {
        driversUrl.push(driverObj.url)
        const driverInfoArray = [
          `${driverObj.givenName} ${driverObj.familyName}`,
          driverObj.permanentNumber ? driverObj.permanentNumber : '',
          driverObj.nationality,
          driverObj.dateOfBirth,
        ]
        return driverInfoArray
      });
      dispatch({
        type: GET_DRIVERS,
        drivers,
        lastPage: drivers.length < 30,
        firstPage: offset === 0,
        driversUrl,
      })
    } catch (err) {
        console.error(err);
    }
  }
}