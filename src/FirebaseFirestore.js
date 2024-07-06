import { collection, addDoc, query, where, getDocs, orderBy } from "firebase/firestore"; 
import { db } from './firebase';

export const addCollection = async (jsonData, parentCollection) => {
    try {
        const docRef = await addDoc(collection(db, parentCollection), jsonData);
        return(["Document written with ID: ", docRef.id, "success"])
      } catch (e) {
        return("Error adding document: ", e);
      }
}

export const simpleQuery = async (parentCollection, dataQuery, orderByCriteria) => {
  try {
    const cond = where(dataQuery[0], dataQuery[1], dataQuery[2])
    const q = query(collection(db, parentCollection), cond, orderBy(orderByCriteria))
    const response = await getDocs(q)
      const responseArray = []
      response.forEach((doc) => {
        responseArray.push([doc.id, doc.data()]);
      });
      return responseArray
  } catch (e) {
    return("Error adding document: ", e);
  }
}

export const compositeTwoQuery = async (parentCollection, firstQuery, secondQuery) => {
    try {
      const firstCond = where(firstQuery[0], firstQuery[1], firstQuery[2])
      const secondCond = where(secondQuery[0], secondQuery[1], secondQuery[2])
      const q = query(collection(db, parentCollection), firstCond, secondCond)
      const response = await getDocs(q)
      const responseArray = []
      response.forEach((doc) => {
        responseArray.push([doc.id, doc.data()]);
      });
        return(responseArray)
      } catch (e) {
        return("Error adding document: ", e);
      }
}