/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeScreen = () => {
  return (
    <View>
      <Text>Vamos que de puede!</Text>
    </View>
  );
};

const DetalleScreen = () => {
  return (
    <View>
      <Text>Alegale</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detalle: {
      screen: DetalleScreen,
    },
  },
  {initialRouteName: 'Detalle'},
);

export default createAppContainer(AppNavigator);
