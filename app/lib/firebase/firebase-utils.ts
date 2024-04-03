import { db, storage } from "./firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { User } from "firebase/auth";
import { IFormData } from "../types";
import { getFormattedActualDate } from "../utils/utils";

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
            state: "Pending",
            createdAt: getFormattedActualDate(),
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
            return snapshot
        })
        .catch((err) => {
            console.error('Error uploading file:', err)
        })
    return task
}