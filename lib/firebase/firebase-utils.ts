'use client'
import { db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { User } from "firebase/auth";
import { IFormData } from "@/lib/types";
import { getFormattedActualDate } from "@/lib/utils/utils";

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
