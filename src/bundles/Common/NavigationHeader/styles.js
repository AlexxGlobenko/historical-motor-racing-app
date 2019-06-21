import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4FC08D',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : null,
    height: Platform.OS === 'ios' ? getStatusBarHeight() + 48 : 48,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  fakeView: {
    width: 30,
    height: 30,
  }
});
