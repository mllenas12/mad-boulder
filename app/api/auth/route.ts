import { auth } from "firebase-admin";
import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { ServerResponse, IncomingMessage } from "http";
import { cookies, headers } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";

// iniciar firebase
customInitApp();
const COOKIE_SESSION_NAME = process.env.COOKIE_SESSION_NAME || 'sessionId';

export async function POST(request: IncomingMessage, response: ServerResponse) {
    const authorization = headers().get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
        const idToken = authorization.split("Bearer ")[1];
        const decodedToken = await auth().verifyIdToken(idToken);

        if (decodedToken) {
            //Generate cookie
            const expiresIn = 60 * 60 * 24 * 1 * 1000;
            const sessionCookie = await auth().createSessionCookie(idToken, {
                expiresIn,
            });
            const options: ResponseCookie = {
                name: COOKIE_SESSION_NAME,
                value: sessionCookie,
                maxAge: expiresIn,
                httpOnly: true,
                secure: true,
            };

            ///Add cookie to browser
            cookies().set(options);
        }
    }

    return NextResponse.json({}, { status: 200 });
}

// User Auth
export async function GET(request: IncomingMessage) {
    const session = cookies().get(COOKIE_SESSION_NAME)?.value || "";

    //Validate if cookie already exists
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    //Use Firebase to validate cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);

    if (!decodedClaims) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    return NextResponse.json({ isLogged: true }, { status: 200 });
} 