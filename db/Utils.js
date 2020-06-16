import {db} from './Firebase'


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

