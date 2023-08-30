import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

/* eslint-disable no-undef */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSender: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const fetchData = async (collectionName) => {
  try {
    console.log();
    const itemsCollection = collection(db, collectionName);
    const itemsSnapshot = await getDocs(itemsCollection);

    const data = itemsSnapshot.docs.map(doc => doc.data());

    // Sort by id
    data.sort((a, b) => {
      return a.id - b.id;
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default  fetchData;