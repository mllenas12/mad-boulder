import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminPrivateKey = process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY;

if (!firebaseAdminPrivateKey) {
    throw new Error('La variable de entorno NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY no está definida.');
}
const { privateKey } = JSON.parse(firebaseAdminPrivateKey);

const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}