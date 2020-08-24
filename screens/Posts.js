import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

export default ({navigation}) => {
  const userId = navigation.getParam('user_id')
  const username = navigation.getParam('name')
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setLoading(false)
  }

  useEffect (() => {
    fetchPosts()
  }, [])

    return (
      <View style={styles.container}>
      {loading ? <Text>Cargando ... </Text>: 
      <FlatList
      style ={styles.list} 
        data={posts.filter(x=> x.userId === userId)}
        keyExtractor={x => String(x.id)}
        renderItem={({item}) => 
        <ListItem 
        title={item.title}
        onPress={() => navigation.navigate('Detail', 
        {title: item.title, body: item.body, name: username})}
        />}
      />}
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
      alignSelf:'stretch',
    }
  });