import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

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

  const Item = ({title}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detalle', {name: 'Raul'})}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => <Item title={item.nombre} />;

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
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
  item: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
