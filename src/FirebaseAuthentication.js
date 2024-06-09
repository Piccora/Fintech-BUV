import { auth } from "./firebase.js"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user
            return [user.displayName, "success"]
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return [[errorCode, errorMessage], "failure"]
        })
};

export const signUp = async (email, password, fullName) => {
    return await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user
            await updateProfile(user, {
                displayName: fullName
            });
            return await user.getIdToken().then((result) => { 
                console.log([user.displayName, result, "success"])
                return [user.displayName, result, "success"]
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return [[errorCode, errorMessage], "failure"]
        });
}

export const signingOut = async () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        return [null, "success"]
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return [[errorCode, errorMessage], "failure"]
      });
}