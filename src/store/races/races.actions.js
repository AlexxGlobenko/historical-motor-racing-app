import axios from "axios";

const GET_SHEDULE = 'GET_SHEDULE';
const CHANGE_LOADING_SHEDULES_DATA_STATUS = 'CHANGE_LOADING_SHEDULES_DATA_STATUS';

export const changeLodaingDataStatus = () => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LOADING_SHEDULES_DATA_STATUS,
    })
  }
}

export const getShedule = () => {
  return async (dispatch) => {
    try {
      const racesSheduleResponse = await axios({
        method: 'get',
        url: `http://ergast.com/api/f1/current.json`,
      });
      const races = racesSheduleResponse.data.MRData.RaceTable.Races.map((race, index) => {
        return [
          race.season,
          race.round,
          race.raceName,
          race.time,
          race.Circuit.circuitName,
          race.Circuit.Location.locality,
          race.Circuit.Location.country
        ];
      })
      dispatch({
        type: GET_SHEDULE,
        racesShedule: races,
      })
    } catch(err) {
      console.log('err', err);
    }
  }
}