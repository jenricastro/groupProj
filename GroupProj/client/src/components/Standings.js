import React, { useState, useEffect } from "react";
import axios from "axios";

const Standings = () => {
const [selectedLeague, setSelectedLeague] = useState("esp.1");
const [selectedYear, setSelectedYear] = useState("2022");
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
setLoading(true);
setData([]);
axios
    .get(
    `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
    )
        .then((res) => {
        console.log(res.data.data.standings);
        setData(res.data.data.standings);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [selectedYear, selectedLeague]);

return (
<div className="standings-container">
    <div className="select-fields">
    <select name="select-league" id="select-league" defaultValue={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
        <option value="esp.1">Spanish Primera División</option>
        <option value="fra.1">French Ligue 1</option>
        <option value="ita.1">Italian Serie A</option>
        <option value="mex.1">Mexican Liga BBVA MX</option>
        <option value="eng.1">English Premier League</option>
        <option value="ger.1">German Bundesliga</option>
    </select>

    <select name="select-year" id="select-year" onChange={(e) => setSelectedYear(e.target.value)} defaultValue={selectedYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </select>
    </div>

    <div className="div-rank">
    {loading ? (
        <default type="Circles" color="black" height={80} width={80} />
    ) : (
        data?.map((data, index) => (
        <div key={index} className="inner-divider">
            <h1>
            <span>
                {`${index + 1}.`}
                <img src={data.team.logos[0]?.href} alt="#" className="little-logo"/>
            </span>{" "}
            {data.team.shortDisplayName}
            </h1>
        </div>
        ))
    )}
    </div>
</div>
);
};

export default Standings;