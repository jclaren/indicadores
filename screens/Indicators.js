import React from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import ListItem from '../components/ListItem';

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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Indicators = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      onPress={() => navigation.navigate('modal')}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Indicators;
