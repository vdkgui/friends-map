import {db} from './Firebase'
import * as Location from 'expo-location'


export const addFriend = (friend) => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
    .add(friend)
    .then(r => resolve(r.id))
    .catch(e => reject(e))
  })
}


export const deleteFriend = (friend) => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
      .doc(friend.key)
      .delete()
      .then(() => resolve())
      .catch(e => reject(e))
  })
}

export const editFriend = (friend) => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
      .doc(friend.key)
      .update(friend)
      .then(() => resolve())
      .catch(e => reject(e))
  })
}


export const getFriends = () => {
  return new Promise((resolve, reject) => {
    db.collection("friends")
      .get()
      .then(snapchot => {
        let friends = []
        snapchot.forEach((item) => {
          friends.push({
              ...item.data(),
              key: item.id
          })
      })
        resolve(friends)
      })
    .catch(e => reject(e))
  })
}


export const searchLatLong = async (address) => {
  let { status } = await Location.requestPermissionsAsync()
  if (status !== "granted") {
    console.log("Permissão de acesso a localização negada")
  }else{
    await Location.geocodeAsync(address)
      .then(response => {
        addressLatLong = {
          latitude: response[0].latitude,
          longitude: response[0].longitude,
        }})
      .catch(e => console.log(e))
      return addressLatLong
  }
}
