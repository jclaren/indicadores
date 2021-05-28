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

const Indicators = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    mindicador.getIndicators().then(function (response) {
      const result = Object.values(response.data).filter(item => item.nombre);
      setData(result);
      setLoading(false);
    });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.row}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate('Valores', {name: item.codigo})}>
        {item.nombre}
      </Text>
      <Text
        style={styles.button}
        onPress={() => navigation.navigate('Detalles', {indicator: item})}>
        i
      </Text>
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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.codigo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
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
