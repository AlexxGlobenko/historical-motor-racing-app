import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export const NavigationHeader = ({ title, showBackButton, navigation }) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Icon size={30} color="#fff" name="arrow-back" />
        </TouchableOpacity>
      )}
      {!showBackButton && (<View style={styles.fakeView} />)}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.fakeView} />
    </View>
  )
};
