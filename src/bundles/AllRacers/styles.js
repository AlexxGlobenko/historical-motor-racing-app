import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  paginationButtonsWrapper: {
    // backgroundColor: '#4FC08D',
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center', flexWrap: 'nowrap', fontSize: 10,},
  row: { flexDirection: 'row', },
  paginationButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  spinner: {
    width: 50,
    height: 50,
  },
  spinnerContainer: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  toBiography:  {
    backgroundColor: '#F44335',
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  getRacesSheduleBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    backgroundColor: '#764ABB',
    borderRadius: 4,
  },
  getSheduleText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
  getRacesSheduleBtnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});
