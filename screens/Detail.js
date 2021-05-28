import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Detail = ({navigation}) => {
  const indicator = navigation.getParam('indicator');
  console.log("******* Pantalla nueva 2 ********");
  console.log(indicator); 

  return (
    <View style={styles.container}>
     <Text>{indicator.valor}</Text>
     <Text>{indicator.nombre}</Text>
     <Text>{indicator.fecha}</Text>
     <Text>{indicator.unidad_medida}</Text>
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
  }
});
