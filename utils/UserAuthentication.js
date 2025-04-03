import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { fetchFavoriteTeam } from "./FirebaseDBHelper";

export const UserAuthentication = () => {
    const [user, setUser] = useState(undefined);
    const [favoriteTeam, setFavoriteTeam] = useState("null");

    useEffect(() => {

        const userAuth = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
            setUser(user);

            if (user) {
                setFavoriteTeam(await fetchFavoriteTeam(user.email))
            } else {
                setFavoriteTeam("null");
            }
        });

        return userAuth;
    }, []);

    return {
        user, favoriteTeam, setFavoriteTeam
    };
}