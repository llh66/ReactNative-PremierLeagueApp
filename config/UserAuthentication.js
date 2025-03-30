import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { useEffect, useState } from "react";

export const UserAuthentication = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const userAuth = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if(user)
                setUser(user);
            else
                setUser(undefined);
        });

        return userAuth;
    }, []);

    return {
        user
    };
}