import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { FIREBASE_DB } from "../config/FirebaseConfig"

export const fetchFavoriteTeam = async (email) => {
    try {
        const docRef = doc(FIREBASE_DB, "UserProfiles", email);
        const userProfile = await getDoc(docRef);
        const favoriteTeamResponse = userProfile.data().favoriteTeam;
        console.log("Successfully fetched favorite team");
        return favoriteTeamResponse;
    } catch (error) {
        console.log("Error fetching favorite team", error);
        return "null";
    }
}

export const initializeFavoriteTeam = async (email) => {
    try {
        const docRef = doc(FIREBASE_DB, "UserProfiles", email);
        await setDoc(docRef, {
            favoriteTeam: "null"
        });
        console.log("Successfully initialized favorite team");
    } catch (error) {
        console.log("Error initializing favorite team", error);
    }
}

export const updateFavoriteTeam = async (email, teamId) => {
    try {
        const docRef = doc(FIREBASE_DB, "UserProfiles", email);
        await updateDoc(docRef, {
            favoriteTeam: teamId
        });
        console.log("Successfully set favorite team as", teamId);
    } catch (error) {
        console.log("Error setting favorite team", error);
    }
}