import React, { useState } from 'react'
import { StyleSheet,Text, View } from 'react-native'

import InputForm from '../components/Input'
import * as utils from '../../db/Utils'
import Button from '../components/buttonForm'



export default props => {
  const { navigation } = props
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [msgError, setMsgError] = useState(null)

  const addNewFriend = (name, phone, address) => {
    if (name && phone && address) {
      let friend = {
        name: name,
        phone: phone,
        address: address
      }
      utils.addFriend(friend)
      .then(r => {
        navigation.navigate("Home")
      })
      .catch(e => setMsgError(e))
    }else{
      setMsgError("Todos os valores são obrigatórios!")
    }
  }


  const textError = (msg) => {
    if(msg){
      return <Text style={styles.error}>{msg}</Text>
    }
  }

	return (
		<View style={styles.container}>
      <Text></Text>
      <InputForm text='Nome Completo' onChangeText={t => setName(t)}></InputForm>
      <InputForm text='Telefone' keyboard='numeric' onChangeText={t => setPhone(t)}></InputForm>
      <InputForm text='Endereço'  onChangeText={t => setAddress(t)}></InputForm>
      <Button text='Adicionar Amigo' onPress={() => addNewFriend(name, phone, address)}></Button>
      {textError(msgError)}
    </View>
	)
}

const styles = StyleSheet.create({
	container: {
  flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'flex-start',
  },
  error: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d41500'
  }
})
