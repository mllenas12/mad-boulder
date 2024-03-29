import { NextRouter } from "next/router";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const getAuth = async (email: string, password: string, router: NextRouter, isSignUp: boolean) => {
    if (isSignUp) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCred) => {
                fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                    },
                }).then((response) => {
                    if (response.status === 200) {
                        router.push("/areas");
                    }
                })
            })
            .catch(error => {
                alert(`Sign up failed: ${error.message} - ${error.code}`)
            })
    } else {
        signInWithEmailAndPassword(auth, email.trim(), password)
            .then(async (userCred) => {
                fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                    },
                }).then((response) => {
                    if (response.status === 200) {
                        router.push("/");
                    }
                })
            })
            .catch(error => {
                alert(`Login failed: ${error.message} - ${error.code}`)
            })
    }
}

export { getAuth }
