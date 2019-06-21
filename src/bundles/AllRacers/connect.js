import { connect } from 'react-redux';

import * as driversActions from '../../store/drivers/drivers.actions';
const mapStateToProps = ({ drivers }) => ({
  onePageDriversArray: drivers.onePageDriversArray,
  lastPage: drivers.lastPage,
  firstPage: drivers.firstPage,
  loadingData: drivers.loadingData,
  driversUrl: drivers.driversUrl,
});

const mapDispatchToProps = {
  ...driversActions,
};
export default (container) => connect(mapStateToProps, mapDispatchToProps)(container);
