import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import firebase_app from '../firebase/config';
import { PageButtonLoader } from '../components/Button/buttonload';

const auth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);
export const AuthContext = createContext<{user: DocumentData | null, setUser: Function, }>({user: {}, setUser: () => {},});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children } : { children: ReactNode }) => {
    const [user, setUser] = useState<DocumentData | null>(null);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
                setLoading(false);
                router.push("/");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, }}>
            {loading ? <div className='h-screen w-screen flex justify-center items-center' >
                <div className='h-[60px] w-[60px]' >
                    <PageButtonLoader />
                </div>
            </div> : children}
        </AuthContext.Provider>
    );

    
}