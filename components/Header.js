import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Header() {
  return (
      <View style = {styles.header}> 
          <Text style ={styles.title}> My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor:'coral'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: "#fff",
        fontWeight:'bold'
    }
})
export default Header