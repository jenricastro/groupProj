import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SCAdd = () => {
    const [myteam, setMyTeam] = useState("");
    const [rival, setRival] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [league, setLeague] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    
const [ user, setLoginUser] = useState({})

useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
}, [])



    const handleSubmit = (e) =>{
    e.preventDefault();


        axios
        .post ("http://localhost:8000/api/teams", {myteam, rival, country, league, location})
        .then((response) =>{
            console.log(response);
            console.log(response.data);
            setMyTeam("");
            setRival("");
            setCountry("");
            setLeague("");
            setLocation("");
            navigate("/form");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };


    return(
        <div>
            
        <h3>Welcome {user.name}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <Link to={'/form'}>HomePage</Link>
                        <form onSubmit={handleSubmit}>

                        <div className="form-fields">
                            <label>My Team:</label>
                            <input type="text" 
                            name="myteam" value={myteam}
                            onChange = {(e) => setMyTeam(e.target.value)}/>
                        </div><div>
                            {errors.name ?  
                            <p>{errors.name.message}</p>
                            :null}
                        </div>

                        <div className="form-fields">
                        <label>Rival:</label>
                            <input type="text" 
                            name="rival" value={rival}
                            onChange = {(e) => setRival(e.target.value)}/>
                        </div><div>
                            {errors.name ?  
                            <p>{errors.name.message}</p>
                            :null}
                        </div>
                        
                        <div className="form-fields">
                            <label>Country:</label>
                            <input type="text"
                            name="country" value={country}
                            onChange = {(e) => setCountry(e.target.value)}/>
                        </div><div>
                            {errors.type ?  
                            <p>{errors.type.message}</p>
                            :null}
                        </div>

                        <div className="form-fields">
                            <label>League:</label>
                            <input type="text" 
                            name="league" value={league}
                            onChange = {(e) => setLeague(e.target.value)}/>
                        </div><div>
                            {errors.type ?  
                            <p>{errors.type.message}</p>
                            :null}
                        </div>

                        <div className="form-fields">
                            <label>Home or Away:</label>
                            <input type="text" 
                            name="location" value={location}
                            onChange = {(e) => setLocation(e.target.value)}/>
                        </div><div>
                            {errors.type ?  
                            <p>{errors.type.message}</p>
                            :null}
                        </div>

                        
                            <button className="btn btn-primary" type="submit">Add Match!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SCAdd;