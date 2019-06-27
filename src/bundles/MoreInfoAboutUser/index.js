import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { NavigationHeader } from '../Common/NavigationHeader';
import { WebView } from "react-native-webview";
import styles from './styles';

export default class MoreInfoAboutUser extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  // navigation header options
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

