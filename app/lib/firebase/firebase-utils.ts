import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { User } from "../types";

export const signIn = async (email: string, password: string, router: AppRouterInstance) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => router.push("/video-uploader"))
        .catch((err) => { console.log(err) })
}

export const logIn = (email: string, password: string, router: AppRouterInstance) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => router.push("/video-uploader"))
        .catch((err) => { console.log(err) })
}
// agafa la informació de l'usuari que s'ha registrat, i ho converteix en un usuari 
//amb informació per fer-la servir a la UI

const mapUserFromFirebaseAuthToUser = (user: any) => {
    const { displayName, email, photoUrl } = user
    return {
        avatar: photoUrl,
        userName: displayName,
        email,
    }
}
// funció que observa si hi ha canvis en l'estat d'autenticacio de lusuari: 
export const onAuthStateChanged = (onChange: (user: any) => void) => {
    return auth.onAuthStateChanged((user) => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizedUser)
    })
}

// retorna el userCredential, que es el que tindrà les dades de l'usuari registrat
export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}


