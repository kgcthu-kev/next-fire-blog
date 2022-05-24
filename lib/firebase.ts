import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCqhIjzYTKw8p7WjStFgZnhiKRc3S-J-Pk',
  authDomain: 'next-fire-blog-600dd.firebaseapp.com',
  projectId: 'next-fire-blog-600dd',
  storageBucket: 'next-fire-blog-600dd.appspot.com',
  messagingSenderId: '854649809599',
  appId: '1:854649809599:web:894fc2fd0b966b7dd1740a',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
