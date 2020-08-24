import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({ navigation }) => {
  const body = navigation.getParam('body')
  const title = navigation.getParam('title')
  const name = navigation.getParam('name')
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  