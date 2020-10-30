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
  const [todos, setTodos] = useState([])
  const addTodo=()=>{
    setTodos([input, ...todos]);
    setInput(''); 
  }
  return (
    <SafeAreaView>

    <View>  

  <Text style={styles.bigBlue}>
Todo List App

  </Text>
  </View>
  {todos.map(todo=>{
    <Todo title={todo}/>
  })}

  <TextInput
  style={styles.todoInput}
  value={input}
  onChangeText={text=> setInput(text)}
  
  />

  <Button onPress={ addTodo

} title='Add Todo' />

  
    </SafeAreaView>
  
  );
}

export default App

