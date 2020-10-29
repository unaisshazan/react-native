import React, { Component,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,Button } from 'react-native';
import Todo from './Todo'
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  
    fontSize: 30,
    textAlign:'center'
  },
  todoInput:{
margin:20,
    height:40,
    borderColor:'red',
    borderWidth:1
  }
});



const App = () => {
  const[input,setInput] = useState('')
  const [todos, setTodos] = useState([''])
  const addTodo=()=>{
    setTodos([input,...todos]);
    setInput('');
  }
  return (
    <SafeAreaView>
    <View>
  <Text style={styles.bigBlue}>
  UTech
  
  </Text>
  
  <Todo  title="Parent FeedBack App"/>
  <Todo title="How is your course experience?"/>
  <TextInput
  style={styles.todoInput}
  value
  onChangeText={text=> setInput(text)}
  
  />

    <Todo title="have your kid understand everything?"/>
  <TextInput
  style={styles.todoInput}
  value
  onChangeText={text=> setInput(text)}
  
  />
  <Button title='Submit' onPress={

  }/>
    </View>
  
    </SafeAreaView>
  
  );
}

export default App

