import React from 'react'
import { TouchableOpacity, StyleSheet, Text} from 'react-native'


export default  props => { 
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 8,
    width: 200,
    height: 55,
    margin: 25
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
})
