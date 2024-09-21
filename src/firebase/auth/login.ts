import firebase_app from "../config";
import { AuthError, sendPasswordResetEmail } from "firebase/auth";
import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';

const auth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);
const storage = getStorage(firebase_app);

const uploadDocument = async (file: File, userId: string): Promise<string> => {
    // const storage = getStorage();
    const storageRefs = storageRef(storage, `documents/post${userId}${file.name}`);
    await uploadBytes(storageRefs, file);
    const downloadURL = await getDownloadURL(storageRefs);
    return downloadURL;

};

export default async function login(email: string, password: string, router: any) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        // window.location.href = `${process.env.PUBLIC_URL}/home`
        router.push(`/createblog`)
        error= null
    } catch (e) {
        const firebaseError = e as AuthError;
        const { code, message } = firebaseError;
        const normalError = new Error(message || 'Unknown error');
        normalError.name = code || 'UnknownError';
        error = getFriendlyErrorMessage(firebaseError)
        console.log(normalError?.message);
    }

    return { result, error };
}

export async function createArticle(body:any) {
    let result = null,
        error = null;
    try {
        const articleCollection = collection(firestore, 'Article');
        const documentUrls = await Promise.all([
            uploadDocument(body.image!, body.id),
        ]);
        result = await addDoc(articleCollection, {
            ...body,
            image: documentUrls[0]
        })
        result = result?.id
        error= null
    } catch (e) {
        const firebaseError = e as AuthError;
        const { code, message } = firebaseError;
        const normalError = new Error(message || 'Unknown error');
        normalError.name = code || 'UnknownError';
        error = getFriendlyErrorMessage(firebaseError)
        console.log(normalError?.message);
    }

    return { result, error };
}

export async function updateArticle(body:any) {
    let result = null,
        error = null;
    try {
        const articleCollection = doc(firestore, 'Article', body?.articleId);
        let imageUrl = body.image
        if(typeof imageUrl === 'string') {

        }else {
            const documentUrls = await Promise.all([
                uploadDocument(body.image!, body.id),
            ]);
            imageUrl = documentUrls[0]
        }
        result = await updateDoc(articleCollection, {
            ...body,
            image: imageUrl
        })
        result = body?.articleId
        error= null
    } catch (e) {
        const firebaseError = e as AuthError;
        const { code, message } = firebaseError;
        const normalError = new Error(message || 'Unknown error');
        normalError.name = code || 'UnknownError';
        error = getFriendlyErrorMessage(firebaseError)
        console.log(normalError?.message);
    }

    return { result, error };
}

function getFriendlyErrorMessage(error: AuthError): string {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'This email address is already in use by another account.';

        case 'auth/invalid-email':
            return 'The provided email address is invalid. Please check and try again.';

        case 'auth/user-disabled':
            return 'This account has been disabled. Please contact support for assistance.';

        case 'auth/user-not-found':
            return 'There is no user associated with this email address.';

        case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';

        case 'auth/too-many-requests':
            return 'We have detected too many login attempts. Please wait a moment and try again.';

        case 'auth/popup-closed-by-user':
            return 'The login popup was closed before authentication could complete. Please try again.';

        case 'auth/cancelled-popup-request':
            return 'Login failed. Please try again.';

        case 'auth/popup-blocked':
            return 'The login popup was blocked. Please allow popups and try again.';

        case 'auth/operation-not-allowed':
            return 'This login method is not allowed. Please contact support.';

        default:
            return error.message || 'An unexpected error occurred. Please try again later.';
    }
}
