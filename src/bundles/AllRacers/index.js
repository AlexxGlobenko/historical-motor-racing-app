import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationHeader } from '../Common/NavigationHeader';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {
  MKSpinner,
} from 'react-native-material-kit';
import connect from './connect';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


class AllRacers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Driver name', 'Permanent Number', 'Nationality', 'DOB'],
      pageNumber: 0,
    }
  }

  // navigation header options
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
          <NavigationHeader
            title='Drivers table'
          />
      ),
    };
  }

  componentDidMount() {
    const { getDrivers } = this.props;
    getDrivers();
  }

  // button for navigating to screen with more info about driver
  moreInfoAboutDriverButton = (driverName, index) => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
        style={styles.toBiography}
        onPress={() => {this.goToUserMoreInfo(index)}}
      >
        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '500', color: '#FFF' }}>{driverName}</Text>
      </TouchableOpacity>
    )
  }

  // navigation function for navigating to screen with more info about driver
  goToUserMoreInfo = (index) => {
    const { navigation, driversUrl } = this.props;
    navigation.navigate({
      routeName: 'MoreInfoAboutUser',
      params: {
        link: driversUrl[index],
      }
    });
  }

  // navigation function for navigating to screen with races shedule
  navToRacesShedule = () => {
    const { navigation } = this.props;
    navigation.navigate({
      routeName: 'RacesShedule',
    });
  }

  // next page button press handler
  onNextPagePress = () => {
    const { lastPage, getDrivers, changeLodaingDataStatus } = this.props;
    if (!lastPage) {
      this.setState((state) => (
       {pageNumber: state.pageNumber + 1}
      ), () => {
        changeLodaingDataStatus();
        getDrivers(30*this.state.pageNumber);
      });
    }
  }

  // previous page button press handler
  onPreviousPagePress = () => {
    const { pageNumber } = this.state;
    const { getDrivers, changeLodaingDataStatus } = this.props;
    if (pageNumber > 0) {
      this.setState((state) => (
       {pageNumber: state.pageNumber - 1}
      ), () => {
        changeLodaingDataStatus();
        getDrivers(30*this.state.pageNumber);
      });
    }
  }

  render() {
    const state = this.state;
    const { onePageDriversArray, firstPage, lastPage, loadingData } = this.props;
    return (
      <SafeAreaView style={{ flex: 1,  backgroundColor: '#fff', }}>
        {loadingData && (
            <View style={styles.spinnerContainer}>
              <MKSpinner style={styles.spinner}/>
            </View>
          )}
         {!loadingData && ( <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} bounces={false}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              {
                onePageDriversArray.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => {
                    if (cellIndex === 0) {
                      return <Cell key={cellIndex} data={this.moreInfoAboutDriverButton(cellData, index)} textStyle={styles.text}/>;
                    }
                    return  <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>

                  })}
                  </TableWrapper>
                ))
              }
            </Table>
             <View style={styles.paginationButtonsWrapper}>
             <TouchableOpacity disabled={firstPage} onPress={this.onPreviousPagePress}>
               <Icon name="chevron-left" size={60} color="#000" />
             </TouchableOpacity>
             <TouchableOpacity disabled={lastPage} onPress={this.onNextPagePress}>
               <Icon name="chevron-right" size={60} color="#000" />
             </TouchableOpacity>
           </View>
           <View style={styles.getRacesSheduleBtnWrapper}>
           <TouchableOpacity
            style={styles.getRacesSheduleBtn}
            onPress={this.navToRacesShedule}
          >
              <Text style={styles.getSheduleText}>Get race shedule</Text>
           </TouchableOpacity>
           </View>
        </ScrollView>)}
      </SafeAreaView>
    )
  }
}

AllRacers.propTypes = {
  onePageDriversArray: PropTypes.array.isRequired,
  firstPage: PropTypes.bool.isRequired,
  lastPage: PropTypes.bool.isRequired,
  loadingData: PropTypes.bool.isRequired,
};

AllRacers.defaultProps = {
  onePageDriversArray: [],
  firstPage: true,
  lastPage: false,
  loadingData: true,
};

export default connect(AllRacers);
