import { connect } from 'react-redux';

import * as driversActions from '../../store/drivers/drivers.actions';
const mapStateToProps = ({ drivers }) => ({
  loadingData: drivers.loadingData,
});

const mapDispatchToProps = {
  ...driversActions,
};
export default (container) => connect(mapStateToProps, mapDispatchToProps)(container);