/* Function Component doc: https://reactnative.dev/docs/intro-react*/
import React from 'react';
import {Text} from 'react-native';
const dateFormat = date => {
  return date.substring(0, 10);
};

const Cat = date => {
  return <Text>{dateFormat(date)}</Text>;
};

export default Cat;
