import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndicatorsScreen from './screens/Indicators';
import ValuesScreen from './screens/Values';
import DetailScreen from './screens/Detail';
import Modal from './screens/Modal';

const AppNavigator = createStackNavigator(
  {
    Indicadores: {
      screen: IndicatorsScreen,
    },
    Valores: {
      screen: ValuesScreen,
    },
    Detalles: {
      screen: DetailScreen,
    },
  },
  {initialRouteName: 'Indicadores'},
);

export default createAppContainer(AppNavigator);
