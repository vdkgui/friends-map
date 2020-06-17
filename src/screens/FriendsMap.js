import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import * as utils from '../../db/Utils'
import * as Location from 'expo-location'


export default props => {
  const [friends, setFriends] = useState([])
  const [myPosition, setMyPosition] = useState(null) 
  
  useEffect(() => {
    getMyPosition()
    getFriends()
  }, [])

  const getFriends = () => {
      utils.getFriends()
      .then(data => {
        setFriends(data)
      })
      .catch(e => setErrorMsg(e))
  }

  const getMyPosition = async () => {
    let { status } = await Location.requestPermissionsAsync()

    if (status !== "granted") {
      console.log("Permissão de acesso a localização negado!")
    } else {
      await Location.getCurrentPositionAsync({})
        .then(r => {
           myAddress = {
                latitude: r.coords.latitude,
                longitude: r.coords.longitude,
                latitudeDelta: 0.010,
                longitudeDelta: 0.010,
              }
            setMyPosition(myAddress)
            
          })
        .catch(error => console.log("Erro ao acessar o GPS!"))
    }
  }

  return(
    
    <View>
      <MapView style={styles.mapStyle} initialRegion={myPosition} region={myPosition}>
      {myPosition ? <Marker
        pinColor={"#2b17e3"}
        coordinate={myPosition}
        title={"Meu Local"}
        description={"Casa"}
        /> : null}
      {
        friends.map((item, key) => <Marker
          key={key}
          coordinate={item.address}
          title={item.name}
          description={item.address.info}
        />)
      }
      </MapView>
    </View>
  )
}


styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }

})