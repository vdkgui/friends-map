import React, { useState, useEffect } from 'react'
import { StyleSheet,Text, View } from 'react-native'

import InputForm from '../components/Input'
import * as utils from '../../db/Utils'
import Button from '../components/buttonForm'
import { add } from 'react-native-reanimated'



export default props => {
  const { navigation} = props
  const { route } = props
  const { user } = route.params
  const [key, setKey] = useState(user.key)
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)
  const [msgError, setMsgError] = useState(null)


  const editFriend = async ( key, name, phone, address) => {
    if (name && phone && address) {
      let latLong = await utils.searchLatLong(address)
      let friend = {
        key: key,
        name: name,
        phone: phone,
        address: { info: address,
                  latitude: latLong.latitude,
                  longitude: latLong.longitude,
                  latitudeDelta: 0.010,
                  longitudeDelta: 0.010,
                }
      }
      utils.editFriend(friend)
      .then(r => {
        navigation.navigate("Home")
      })
      .catch(e => setMsgError(e))
    }else{
      setMsgError("Todos os valores são obrigatórios!")
    }
  }

  const deleteFriend = ( key, name, phone, address) => {
		let friend = {
			key: key,
			name: name,
			phone: phone,
			address: address
		}
		utils.deleteFriend(friend)
		.then(r => {
			navigation.navigate("Home")
		})
			.catch(e => setMsgError(e))

  }


  const textError = (msg) => {
    if(msg){
      return <Text style={styles.error}>{msg}</Text>
    }
  }

	return (
	<View style={styles.container}>
      <Text></Text>
      <InputForm text='Nome Completo' value={name} onChangeText={t => setName(t)}></InputForm>
      <InputForm text='Telefone' value={phone} keyboard='numeric' onChangeText={t => setPhone(t)}></InputForm>
      <InputForm text='Endereço' value={address}  onChangeText={t => setAddress(t)}></InputForm>
      <Button text='Editar' onPress={() => editFriend(key, name, phone, address)}></Button>
      <Button text='Deletar' onPress={() => deleteFriend(key, name, phone, address)}></Button>
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
