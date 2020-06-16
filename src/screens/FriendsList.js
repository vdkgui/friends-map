import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import * as utils from '../../db/Utils'

export default props => {

  const [friends, setFriends] = useState([])
  const [errorMsg, setErrorMsg] = useState()
  
  useEffect(() => {
    getFriends()
    console.log(errorMsg)
    console.log(friends)

  }, [])


  const deleteFriend = (friend) => {
    setLoaging(true)
    utils.deleteFriend(friend)
      .then(() => getFriends())
      .catch(e => setErrorMsg(e))
  }


  const getFriends = () => {
    // setLoaging(true)
      utils.getFriends()
      .then(data => {
        console.log(data)
        setFriends(data)
       
        // setLoaging(false)
      })
      .catch(e => setErrorMsg(e))
  }


	return (
		<View style={styles.container}>
				<FlatList
          data={Object.values(friends)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
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
