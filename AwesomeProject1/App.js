import React, { Component } from 'react';
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

export default class LotsOfStyles extends Component {
  render() {
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
onChangeText

/>
      </View>

      </SafeAreaView>

    );
  }
}
