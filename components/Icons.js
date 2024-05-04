import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Icons ({name}) {
  switch(name){
    case 'circle':
        return <Text style={styles.icons}>O</Text>
        break;
    case 'cross':
        return <Text style={styles.icons}>X</Text>
        break;
    default:
        return <Text></Text>
        break;
  }
}
const styles = StyleSheet.create({
    icons: {
      fontSize: 30,
      fontWeight:"bold",
      color: "white"
    }
  });  
