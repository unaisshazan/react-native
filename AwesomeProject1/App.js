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
    padding:20,
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
  const addGig=()=>{
setGigs([...gigs,{
  description:description,
amount:amount
}])

  }
  return (
    <SafeAreaView>

    <View>  

  <Text style={styles.bigBlue}>
Todo List App

  </Text>
  </View>


  <TextInput
  style={styles.todoInput}
  value={description}

  placeholder='Enter a decription'
  onChangeText={text=> setDescription(text)}
  
  />
  <TextInput
  style={styles.todoInput}
  value={amount}
  placeholder='Enter the amount $'
  keyboardType='numeric'
  
  
  onChangeText={text=> setAmount(text)}
  
  />
  <Button onPress={addTodo} title='Add Gog'/>

  
    </SafeAreaView>
  
  );
}

export default App

