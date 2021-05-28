import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndicatorsScreen from './screens/Indicators';
import DetailScreen from './screens/Detail';
import Modal from './screens/Modal';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: IndicatorsScreen,
    },
    Detalle: {
      screen: DetailScreen,
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
