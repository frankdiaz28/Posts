import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default ({title, onPress}) => {
    
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )}

    const styles = StyleSheet.create ({
        container: {
         height: 60,
         justifyContent: 'center',
         borderBottomWidth: 1,
         borderBottomColor: '#eee',
         paddingHorizontal: 15,
        },
        text : {
            fontSize: 18,
        }
    })