/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Vamos que de puede!</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Detalle', {name: 'Raul'})}
      />
    </View>
  );
};

const DetalleScreen = ( {navigation }) => {
  const name = navigation.getParam("name")
  return (
    <View>
      <Text>Alegale {name}</Text>
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
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
