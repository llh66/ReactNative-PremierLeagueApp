import { createContext, useEffect, useState } from "react";
import { fetchPremierLeagueData } from "./ApiHelper";

export const PLDataContext = createContext();

export const PLDataProvider = (props) => {
    const [PLData, setPLData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const getPLData = async () => {
        setLoading(true);
        const data = await fetchPremierLeagueData();
        setPLData(data);
        setLoading(false);
    }

    useEffect(() => {
        getPLData()
    }, []);

    return (
        <PLDataContext.Provider
            value={{
                loading: loading, 
                PLData: PLData
            }}
        >
            {props.children}
        </PLDataContext.Provider>
    )
}