import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { NavigationHeader } from '../Common/NavigationHeader';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  MKSpinner,
} from 'react-native-material-kit';
import { WebView } from "react-native-webview";
import styles from './styles';

export default class MoreInfoAboutUser extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <NavigationHeader
          title='Driver biography'
          showBackButton
          navigation={navigation}
        />
      ),
    };
  }

  showWebView = () => {
    this.setState({
      isLoading: false,
    })
  }

  render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
          <WebView
            source={{ uri: navigation.state.params.link }}
            style={{ marginTop: Platform.OS === 'android' ? 20 : 0, display: isLoading ? 'none' : 'flex' }}
          />
      </View>
    )
  }
}

MoreInfoAboutUser.propTypes = {
  navigation: PropTypes.array.shape,
};

MoreInfoAboutUser.defaultProps = {
  navigation: {},
};

