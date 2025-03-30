const { default: axios } = require("axios")

export const fetchPremierLeagueData = async () => {
    try {
        const response = await axios.get("https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard");
        // console.log(response.data.leagues[0].logos[0].href);
        // console.log(response.data.events[1].competitions[0].venue.fullName);
        return response;
    } catch (error) {
        console.log("Fetching PL Data falied", error);
        return response;
        
    }
}
