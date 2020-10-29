import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({title='add values'}) => {
    return (
        <View>
            <Text style={styles.text1}>{title}</Text>
        
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    
  text1:{
textAlign:"center",
fontSize:23
  }
})
