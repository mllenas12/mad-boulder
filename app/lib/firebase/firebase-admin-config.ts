import { initializeApp, getApps, cert, ServiceAccount } from 'firebase-admin/app';
import serviceAccount from '@/app/lib/firebase/madboulder-json-admin.json'


export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp({ credential: cert(serviceAccount as ServiceAccount) });
    }
}
