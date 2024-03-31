import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const signUp = async (email: string, password: string, displayName: string, router: AppRouterInstance) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            if (user) {
                updateProfile(user, { displayName })
                router.push("/success")
            }
        })
        .catch((err) => { console.log(err) })
}

export const logIn = (email: string, password: string, router: AppRouterInstance) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => router.push("/video-uploader"))
        .catch((err) => { console.log(err) })
}

// const mapUserFromFirebaseAuthToUser = (user: any) => {
//     const { displayName, email, photoUrl } = user;
//     return {
//         avatar: photoUrl,
//         userName: displayName,
//         email,
//     };
// };

// export const changeState = (onChange: (user: any) => void) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//         const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
//         onChange(normalizedUser);
//     });
//     return unsubscribe;
// };



export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export const logOut = (router: AppRouterInstance) => {
    signOut(auth).then(() => router.push("/"))
        .catch((err) => console.log(err))
}
