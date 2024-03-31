import { auth, db } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { IFormData } from "../types";
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


export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });

        return () => {
            unsubscribe(); // Detener el observador cuando el componente se desmonte
        };
    }, []);
    return user
}



export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export const logOut = (router: AppRouterInstance) => {
    signOut(auth).then(() => router.push("/"))
        .catch((err) => console.log(err))
}


export const uploadVideo = async (formData: IFormData, user: User | null) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: formData.name,
            email: formData.email,
            problem: formData.problem,
            area: formData.area,
            sector: formData.sector,
            grade: formData.grade,
            message: formData.message,
            video: formData.video,
            isSubscribed: formData.isSubscribed,
            createdAt: new Date(),
            userId: user ? user.uid : ""

        })

    } catch (err) {
        console.error("Error adding document:", err)
    }
}