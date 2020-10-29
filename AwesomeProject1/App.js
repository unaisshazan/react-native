import React, { Component,useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,Button ,Image} from 'react-native';
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
    
    <Image source ='https://i.ibb.co/QKqzm4f/circle-cropped-Copy.png' />
  <Text style={styles.bigBlue}>
  UTech
  
  </Text>
  {todos.map(todo=>{
    <Todo title={todo}/>
  })}
  <Todo  title="Parent FeedBack App"/>
  <Todo title="How is your course experience?"/>
  <TextInput
  style={styles.todoInput}
  value
  onChangeText={text=> setInput(text)}
  
  />

    <Todo title="Have your kid understand everything?"/>
  <TextInput
  style={styles.todoInput}
  value
  onChangeText={text=> setInput(text)}
  
  />
  <Button title='Submit' onPress={ addTodo

  }/>
    </View>
  
    </SafeAreaView>
  
  );
}

export default App

