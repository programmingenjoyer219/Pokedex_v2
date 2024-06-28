import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const collRef = collection(db, "pokemons");

export { db, collRef }