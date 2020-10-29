import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({title='add values'}) => {
    return (
        <View>
            <Text>{title}</Text>
        
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})
