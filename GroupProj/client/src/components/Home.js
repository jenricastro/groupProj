import React, { useState, useEffect } from "react";
import Leagues from "./Leagues";
import Standings from "./Standings";



const Content = () => {
    const [active, setActive] = useState(true);

    const [ user, setLoginUser] = useState({})

    useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
    }, [])

    

return (
        <div>
        <h3>Welcome {user.name}</h3>
        <div className="content-container">
            <div className="tabs">
            <div className="button-78" onClick={() => setActive(true)}>
                    <h2 className="cursors">Leagues</h2>
                </div>
                <div className="button-79" onClick={() => setActive(false)}>
                    <h2 className="cursors-2">Standings</h2>
                </div>
            </div>
                {active ? <Leagues /> : <Standings />}
            </div>
    </div>

);
};

export default Content;