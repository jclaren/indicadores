import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import mindicador from '../api/mindicador';

const Values = ({navigation}) => {
  const name = navigation.getParam('name');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    mindicador.getValues(name).then(function (response) {
      setData(response.data.serie);
      setLoading(false);
    });
  }, []);

  const dateFormat = date => {
    return date.substring(0, 10);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.title}>{dateFormat(item.fecha)}</Text>
      <Text style={styles.button}>{item.valor}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.fecha}
      />
    </View>
  );
};

export default Values;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 7,
    paddingRight: 20,
  },
  button: {
    paddingTop: 15,
    paddingHorizontal: 20,
    color: 'blue',
    fontSize: 16,
  },
});
