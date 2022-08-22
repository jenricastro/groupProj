import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const SCForm = () => {
const [allTeams, setAllTeams] = useState ([]);

useEffect(() => {
    axios.get(`http://localhost:8000/api/teams`)
    .then((res) => {
        console.log(res.data);
        setAllTeams(res.data);
    })
    .catch((err)=>console.log(err));
}, []);

const [ user, setLoginUser] = useState({})

useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
}, [])

const updateUser = (user) => {
    localStorage.setItem("User", JSON.stringify(user))
    setLoginUser(user)
}

return(
    <div>
        <div class="topnav">
            <a className="button-logout" onClick={() => updateUser({})} href="/">Logout</a>
            <a href="/landingpage">Leagues</a>
            <h3>Welcome {user.name}</h3>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-8">
                <Link to="/add">Add a New</Link>
                <p className="text"></p>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">My Team</th>
                    <th scope="col">Rival</th>
                    <th scope="col">Country</th>
                    <th scope="col">League</th>
                    <th scope="col">Home or Away</th>
                    <th scope="col">More Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allTeams.map((team, index) => {
                    return (
                        <tr key={team._id}>
                            <td>{team.myteam}</td>
                            <td>{team.rival}</td>
                            <td>{team.country}</td>
                            <td>{team.league}</td>
                            <td>{team.location}</td>
                            <td>
                            <Link to={`/view/${team._id}`}>
                            <button className="btn btn-primary">Details</button>
                            </Link>
                            <Link to={`/edit/${team._id}`}>
                            <button className="btn btn-primary">Edit</button>
                            </Link>
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    
);
};

export default SCForm;