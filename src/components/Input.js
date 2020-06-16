import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


export default  props => { 
	return (
		<View>
			<Text style={styles.text}>{props.text}</Text>
			<TextInput 
			style={styles.input}
			placeholder={props.ph}
			keyboardType={props.keyboard}
			value={props.value}
			onChangeText={props.onChangeText}>
			</TextInput>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		textAlign: 'center'
	},
	input: {
		textAlign: 'center',
		borderColor: 'black',
		borderWidth: 2,
		margin: 10,
		width: 200,
		height: 45,
		borderRadius: 10
	}
})