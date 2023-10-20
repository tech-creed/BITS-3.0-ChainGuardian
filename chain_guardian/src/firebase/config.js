import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAd7hNPLgIfSaokS19ymJFNxWRgtqhHoiA",
    authDomain: "chainguardian-site.firebaseapp.com",
    projectId: "chainguardian-site",
    storageBucket: "chainguardian-site.appspot.com",
    messagingSenderId: "1063795016822",
    appId: "1:1063795016822:web:dee75f82ef8919098e0b57"
}

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const firestoreDB = getFirestore(app)
const firebaseAuth = getAuth(app)

export { firestoreDB,firebaseAuth }