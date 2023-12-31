import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header.js';
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy koffee", key: 1 },
    { text: "buy milk", key: 2 },
    {text : "buy chicken" ,key:3 },
    
    
  ])
  return (
    <View style={styles.container}>
      {/** header */}
      <Header />
      <View style={styles.content}>
        {/** to form */}
        <View style = {styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item}) =>
              (<Text> { item.text}</Text>)
          }
          
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20

  }
});
