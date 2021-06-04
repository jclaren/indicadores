import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import date from '../components/Date';

const Detail = ({navigation}) => {
  const indicator = navigation.getParam('indicator');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>${indicator.valor}</Text>
      <Text style={styles.info}>Nombre: {indicator.nombre}</Text>
      <Text style={styles.info}>Fecha: {date(indicator.fecha)}</Text>
      <Text style={styles.info}>
        Unidad de medida: {indicator.unidad_medida}
      </Text>
    </View>
  );
};

Detail.navigationOptions = ({navigation}) => {
  const indicator = navigation.getParam('indicator');
  return {
    title: indicator.nombre,
  };
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'blue',
    fontSize: 30,
    padding: 10,
  },
  info: {
    fontSize: 16,
    padding: 10,
  },
});
