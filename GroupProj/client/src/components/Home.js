import React, { useState, useEffect } from "react";
import Leagues from "./Leagues";
import Standings from "./Standings";


const Content = () => {
    const [active, setActive] = useState(true);

    const [ user, setLoginUser] = useState({})

    useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
    }, [])

    const updateUser = (user) => {
        localStorage.setItem("User", JSON.stringify(user))
        setLoginUser(user)
    }

return (
    <div>
        <div class="topnav">
            <a className="button-logout" onClick={() => updateUser({})} href="/">Logout</a>
            <a href="/form">My Calendar</a>
            <h3>Welcome {user.name}</h3>
        </div>
        <div className="content-container">
            <div className="tabs">
                <div className="tab-leagues" onClick={() => setActive(true)}>
                    <h2>Leagues</h2>
                </div>
                <div className="tab-standings" onClick={() => setActive(false)}>
                    <h2>Standings</h2>
                </div>
            </div>
                {active ? <Leagues /> : <Standings />}
            </div>
    </div>

);
};

export default Content;