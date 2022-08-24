import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const SCview= (props) =>{
    const {id} = useParams();
    const [myteam, setMyTeam] = useState("");
    const [rival, setRival] = useState("");
    const [country, setCountry] = useState("");
    const [league, setLeague] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/teams/${id}`)
        .then((response)=>{
            console.log(response.data);
            setMyTeam(response.data.myteam);
            setRival(response.data.rival);
            setLocation(response.data.location)
            setLeague(response.data.league);
            setCountry(response.data.country);
        })
        .catch((err) => {
            console.log(err.response);
        });
}, [id]);

const deleteHandler =() => {
    axios.delete(`http://localhost:8000/api/teams/${id}`)
        .then((response)=> {
            console.log(response);
            console.log(response.data);
            navigate("/form");
        })
        .catch((err)=> console.log(err))
};

const [ user, setLoginUser] = useState({})

useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
}, [])





    return(
        <div>
            <h3>Welcome {user.name}</h3>
            <div className="container">
                <h2> Details about: {myteam} v {rival}</h2>
                <Link to={'/form'}>back to Home</Link>
                <p className="form-fields">country: {country}</p>
                <p className="form-fields">League: {league}</p>
                <p className="form-fields">Location: {location}</p>
                <button onClick={deleteHandler}>Delete Match!</button>
            </div>
        </div>  
    );
};
export default SCview;