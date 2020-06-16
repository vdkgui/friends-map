import * as firebase from 'firebase'
import firestore from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBbnMamU532TSZ76peK_ZWUhBenLoTNlcg",
  authDomain: "friends-map-f10d3.firebaseapp.com",
  databaseURL: "https://friends-map-f10d3.firebaseio.com",
  projectId: "friends-map-f10d3",
  storageBucket: "friends-map-f10d3.appspot.com",
  messagingSenderId: "182206751185",
  appId: "1:182206751185:web:5feeb78195d3f6698300f0"
}

const firebaseApp =
!firebase.apps.length
 ?
firebase.initializeApp(firebaseConfig)
 :
firebase.app()

const db = firebaseApp.firestore()

export {db, firebase}
