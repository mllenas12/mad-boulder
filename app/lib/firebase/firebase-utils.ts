import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { User } from "../types";

export const signIn = async (email: string, password: string, router: AppRouterInstance) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => router.push("/video-uploader"))
        .catch((err) => { console.log(err) })
}

export const logIn = () => {
    console.log("faig login")
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

// export const getAuthentication = async (email: string, password: string, router: AppRouterInstance, isSignUp: boolean, isGoogle: boolean, userCred: any) => {
//     if (isSignUp) {
//         if (isGoogle) {
//             fetch("/api/auth", {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Bearer ${await userCred.user.getIdToken()}`,
//                 },
//             }).then((response) => {
//                 if (response.status === 200) {
//                     router.push("/");
//                 }
//             })
//                 .catch(error => {
//                     alert(`Sign up failed: ${error.message} - ${error.code}`)
//                 })
//         } else {
//             createUserWithEmailAndPassword(auth, email, password)
//                 .then(async (userCred) => {
//                     fetch("/api/auth", {
//                         method: "POST",
//                         headers: {
//                             Authorization: `Bearer ${await userCred.user.getIdToken()}`,
//                         },
//                     }).then((response) => {
//                         if (response.status === 200) {
//                             router.push("/video-uploader");
//                         }
//                     })
//                 })
//                 .catch(error => {
//                     alert(`Sign up failed: ${error.message} - ${error.code}`)
//                 })
//         }
//     } else {
//         if (isGoogle) {
//             fetch("/api/auth", {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Bearer ${await userCred.user.getIdToken()}`,
//                 },
//             }).then((response) => {
//                 if (response.status === 200) {
//                     router.push("/");
//                 }
//             })
//                 .catch(error => {
//                     alert(`Login failed: ${error.message} - ${error.code}`)
//                 })

//         } else {
//             signInWithEmailAndPassword(auth, email.trim(), password)
//                 .then(async (userCred) => {
//                     fetch("/api/auth", {
//                         method: "POST",
//                         headers: {
//                             Authorization: `Bearer ${await userCred.user.getIdToken()}`,
//                         },
//                     }).then((response) => {
//                         if (response.status === 200) {
//                             router.push("/video-uploader");
//                         }
//                     })

//                 })
//                 .catch(error => {
//                     alert(error.code
//                         .split("auth/")[1]
//                         .replaceAll("-", " ")
//                         .toUpperCase())
//                 })
//         }
//     }
// }
