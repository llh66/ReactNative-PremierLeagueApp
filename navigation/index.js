import { useContext } from "react";
import { StateContext } from "../utils/StateContext";
import AuthenticationStack from "./AuthenticationStack";
import ProfileScreen from "../screens/ProfileScreen";
import NoFavoriteTeamScreen from "../screens/NoFavoriteTeamScreen";
import MyTeamStack from "./MyTeamStack";

export const RootProfileTab = () => {
    const {user} = useContext(StateContext);

    return user ? <ProfileScreen/> : <AuthenticationStack/>;
}

export const RootMyTeamTab = ({navigation}) => {
    const {favoriteTeam} = useContext(StateContext);

    return favoriteTeam === "null" ? <NoFavoriteTeamScreen navigation={navigation}/> : <MyTeamStack/>;
}