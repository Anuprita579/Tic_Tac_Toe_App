import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
        padding: 40
    },
    box1:{
        backgroundColor:"black",
        borderColor: "black",
        height:70,
        width: 70,
        margin: 20,
        padding: 10
    }
})