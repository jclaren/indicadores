import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import ListItem from '../components/ListItem';
import axios from 'axios';

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

const DATA = {
  uf: {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  ivp: {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  dolar: {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
};

const map = {a: 1, b: 2, c: 3};

const result = Object.values(DATA);

console.log(result);

const Item = ({title}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Indicators = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    axios.get('https://mindicador.cl/api').then(function (response) {
      console.log('*******************************************');
      const result = Object.values(response.data);
      console.log(result);
      setData(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <Item title={item.nombre} onPress={() => navigation.navigate('modal')} />
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
