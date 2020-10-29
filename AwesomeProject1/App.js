import React, { Component,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './Todo'
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  
    fontSize: 30,
    textAlign:'center'
  }
});



const App = () => {
  const[input,setInput] = useState('')
  return (
    <SafeAreaView>
    <View>
  <Text style={styles.bigBlue}>
  UTech
  
  </Text>
  <Todo />
  <Todo title="unais"/>
  <Todo title="unais"/>
  <TextInput
  value
  onChangeText={text=> setInput(text)}
  
  />
    </View>
  
    </SafeAreaView>
  
  );
}

export default App

