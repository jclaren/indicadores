import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Detail = ({navigation}) => {
  const name = navigation.getParam('name');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    var link = 'https://mindicador.cl/api/' + name;
    axios.get(link).then(function (response) {
      console.log(response.data.serie);
      setData(response.data.serie);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const dateFormat = (date) => {
    return date.substring(0, 10);
  }

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detalle', {name: item.valor})}>      
      <Text style={styles.title}>{dateFormat(item.fecha)}</Text>      
      <Text style={styles.title}>{item.valor}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.fecha}
      />
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
