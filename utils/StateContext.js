import { createContext, useEffect, useState } from "react";
import { fetchScoreboard, fetchTeams } from "./ApiHelper";
import { UserAuthentication } from "./UserAuthentication";

export const StateContext = createContext();

export const ContextProvider = (props) => {
    const [scoreboard, setScoreboard] = useState([]);
    const [teams, setTeams] = useState([]);
    const {user, favoriteTeam, setFavoriteTeam} = UserAuthentication();
    
    const getScoreboard = async () => {
        const data = await fetchScoreboard();
        setScoreboard(data);
    }
    
    const getTeams = async () => {
        const data = await fetchTeams();
        setTeams(data);
    }

    useEffect(() => {
        getScoreboard();
        getTeams();
    }, []);

    return (
        <StateContext.Provider
            value={{
                scoreboard: scoreboard,
                user: user,
                teams: teams,
                favoriteTeam: favoriteTeam,
                setFavoriteTeam: setFavoriteTeam
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}