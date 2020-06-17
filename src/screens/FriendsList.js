import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import * as utils from '../../db/Utils'
import FriendContact from '../components/FriendContact'


export default props => {
  const { navigation } = props
  const [friends, setFriends] = useState([])
  const [errorMsg, setErrorMsg] = useState()
  
  useEffect(() => {
    getFriends()
  }, [])



  const goToEditForm = (key, name, phone, address) => {
    console.log(name)
    navigation.navigate("EditForm", {user:{key:key,
                                     name:name, 
                                     phone:phone, 
                                     address:address}})
  }

  const getFriends = () => {
    // setLoaging(true)
      utils.getFriends()
      .then(data => {
        setFriends(data)
      })
      .catch(e => setErrorMsg(e))
  }
  
	return (
		<View style={styles.container}>
				<FlatList
          data={Object.values(friends)}
          ListHeaderComponent={() => { 
            return(
              <Text></Text>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <FriendContact
                onPress={() => goToEditForm(item.key, item.name, item.phone, item.address.info)} 
                name={item.name}
                phone={item.phone}
                address={item.address.info}
              />
            </View>
          )}
        />
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
