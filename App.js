/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    axios.get('https://mindicador.cl/api').then(function (response) {
      console.log(response.data);
      setMeals(response.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

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
      screen: HomeScreen,
    },
    Detalle: {
      screen: DetalleScreen,
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
