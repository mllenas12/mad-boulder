import { auth, db, storage } from "./firebase-config";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { addDoc, collection } from "firebase/firestore";
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


export const uploadFormToDb = async (formData: IFormData, user: User | null, videoUrl: string) => {
    try {
        const docRef = await addDoc(collection(db, "videos"), {
            climber: user ? user.displayName : formData.climber,
            email: user ? user.email : formData.email,
            problem: formData.problem,
            area: formData.area,
            sector: formData.sector,
            grade: formData.grade,
            message: formData.message,
            file: videoUrl,
            isSubscribed: formData.isSubscribed,
            createdAt: new Date(),
            userId: user ? user.uid : ""

        })

    } catch (err) {
        console.error("Error adding document:", err)
    }
}

export const uploadVideo = (file: any) => {
    const videoRef = ref(storage, `videos/${file.name}`)
    const task = uploadBytes(videoRef, file)
        .then((snapshot) => {
            console.log("uploaded a file")
            return snapshot //objecte UploAdTaskSnapshot amb informació sobre la carrega
        })
        .catch((err) => {
            console.error('Error uploading file:', err)
        })
    return task
}