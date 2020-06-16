import React from 'react'
import { TouchableOpacity, StyleSheet, Text} from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default  props => { 
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.textInfo}>Celular: {props.phone}</Text>
      <Text style={styles.textInfo}>Endereço: {props.address}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    width: 340,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c0c0c0',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    alignItems: 'flex-start',
  },
  textInfo: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black'
  }
})
