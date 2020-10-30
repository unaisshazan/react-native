import React, {useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,Button   } from 'react-native';
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
  const[description,setDescription] = useState('');

  const [amount, setAmount] = useState(0);
  const[ gigs,setGigs] = useState([
{ 
description: 'Freelance',
amount: 499
}
  ]);
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
  value={description}
  onChangeText={text=> setDescription(text)}
  
  />
  <TextInput
  style={styles.todoInput}
  value={amount}
  onChangeText={text=> setAmount(text)}
  
  />
  <Button onPress={addTodo} title='Add Todo'/>

  
    </SafeAreaView>
  
  );
}

export default App

