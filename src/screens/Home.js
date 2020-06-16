import React from 'react'
import { StyleSheet, View } from 'react-native'

import MenuButton from '../components/MenuButton'

export default props => {
	const { navigation } = props

	const goToFriendList = () =>{
		navigation.navigate('FriendsList')
	}


	const goToAddForm = () =>{
		navigation.navigate('AddUser')
	}
	

	return (
		<View style={styles.container}>
      <MenuButton text='Adicionar  Novo Amigo' onPress={() => goToAddForm()}></MenuButton>
      <MenuButton text='Listar Amigos' onPress={() => goToFriendList()}></MenuButton>
      <MenuButton text='Mapa de Amigos'></MenuButton>
		</View>    
	)
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'flex-start',
	}
})
