import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Detail = ({navigation}) => {
    const name = navigation.getParam('name');
    return (
      <View>
        <Text>Alegale {name}</Text>
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
