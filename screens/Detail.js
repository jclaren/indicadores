import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import Chart from '../components/Chart';

const Detail = ({navigation}) => {
  const indicator = navigation.getParam('indicator');
  console.log('******* Pantalla nueva 2 ********');
  console.log(indicator);

  return (
      <View style={styles.container}>
        <Text>{indicator.valor}</Text>
        <Text>{indicator.nombre}</Text>
        <Text>{indicator.fecha}</Text>
        <Text>{indicator.unidad_medida}</Text>
        <Chart></Chart>
      </View>      
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
