const { default: axios } = require("axios")

export const fetchScoreboard = async () => {
    try {
        const today = new Date();
        today.setDate(today.getDate() + 1);
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}${month}${day}`;
        const seasonEndDate = `${month >= 6 ? year + 1 : year}0601`;

        const response = await axios.get(`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=${formattedDate}-${seasonEndDate}`);
        // console.log(response.data.leagues[0].logos[0].href);
        // console.log(response.data.events[1].competitions[0].venue.fullName);
        return response;
    } catch (error) {
        console.log("Fetching Scoreboard failed", error);
        return {};
    }
}

export const fetchTeams = async () => {
    try {
        const response = await axios.get("https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams");
        return response.data.sports[0].leagues[0].teams;

    } catch (error) {
        console.log("Fetching Teams failed", error);
        return {};
    }
}
