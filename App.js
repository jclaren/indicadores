import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndicatorsScreen from './screens/Indicators';
import Modal from './screens/Modal';

const DetalleScreen = ({navigation}) => {
  const name = navigation.getParam('name');
  return (
    <View>
      <Text>Alegale {name}</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: IndicatorsScreen,
    },
    Detalle: {
      screen: DetalleScreen,
    },
  },
  {initialRouteName: 'Home'},
);


export default createAppContainer(AppNavigator);