import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native';

const Indicators = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    axios.get('https://mindicador.cl/api').then(function (response) {
      const result = Object.values(response.data).filter(item => item.nombre);
      setData(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.row}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate('Valores', {name: item.codigo})}>
        {item.nombre}
      </Text>
      <Text style={styles.button}
        onPress={() => navigation.navigate('Detalles', {indicator: item})}
         >i</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.codigo}
      />
    </View>
  );
};

export default Indicators;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    justifyContent: 'flex-start',
  },
  button: {
    paddingHorizontal: 15,
    paddingTop: 5,
    color: 'blue',
    fontSize: 16,
    backgroundColor: '#eee'
  },
});
