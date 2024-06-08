import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase';

export const addCollection = async (jsonData, parentCollection) => {
    try {
        const docRef = await addDoc(collection(db, parentCollection), jsonData);
        return(["Document written with ID: ", docRef.id, "success"])
      } catch (e) {
        return("Error adding document: ", e);
      }
}