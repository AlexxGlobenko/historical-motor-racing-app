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


class RacesShedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Season', 'Round', 'Date', 'Time', 'Circuit', 'Locality', 'Country'],
      pageNumber: 0,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
          <NavigationHeader
            title='Races shedule table'
            showBackButton
            navigation={navigation}
          />
      ),
    };
  }

  componentDidMount() {
    const { getShedule, changeLodaingDataStatus } = this.props;
    changeLodaingDataStatus();
    getShedule();
  }

  render() {
    const state = this.state;
    const { loadingData, races } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
      {loadingData && (
          <View style={styles.spinnerContainer}>
            <MKSpinner style={styles.spinner}/>
          </View>
        )}
        {!loadingData && (
          <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} bounces={false}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            {
              races.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => {
                  return  <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>

                })}
                </TableWrapper>
              ))
            }
          </Table>
          </ScrollView>)}
        </SafeAreaView> 
    )
  }
}

export default connect(RacesShedule);
