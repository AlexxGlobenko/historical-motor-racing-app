import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 6,
    textAlign: 'center',
    flexWrap: 'nowrap',
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
    height: 50,
  },
});