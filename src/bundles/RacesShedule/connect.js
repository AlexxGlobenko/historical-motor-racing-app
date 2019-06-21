import { connect } from 'react-redux';

import * as racesActions from '../../store/races/races.actions';

const mapStateToProps = ({ races }) => ({
  races: races.racesShedule,
  loadingData: races.loadingData,
});

const mapDispatchToProps = {
  ...racesActions,
};
export default (container) => connect(mapStateToProps, mapDispatchToProps)(container);
