import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const SCedit = () => {

    const {id} = useParams();
    const [myteam, setMyTeam] = useState("");
    const [rival, setRival] = useState("");
    const [country, setCountry] = useState("");
    const [league, setLeague] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/teams/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setMyTeam(res.data.myteam);
            setRival(res.data.rival);
            setLocation(res.data.location)
            setLeague(res.data.league);
            setCountry(res.data.country);
        })
        .catch((err) => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/teams/${id}`,{myteam, rival, country, league, location})

        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate(`/form`);
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    };

    const [ user, setLoginUser] = useState({})

useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
}, [])


    return (
        <div>
        <h3>Welcome {user.name}</h3>
        <div className="container">
            <div className="row">
            <h2>Edit: {myteam} vs {rival}</h2>
            <Link to={'/form'}>back to Home</Link>
            
            <form onSubmit={onSubmitHandler}>
                <div className="form-fields">

                <label>My Team:</label>
                        <input type="text" 
                        name="myteam" value={myteam}
                        onChange = {(e) => setMyTeam(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="form-fields">
                <label>Rival:</label>
                        <input type="text" 
                        name="rival" value={rival}
                        onChange = {(e) => setRival(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="form-fields">
                <label>Country:</label>
                        <input type="text"
                        name="country" value={country}
                        onChange = {(e) => setCountry(e.target.value)}/>

                    {errors.name ? 
                    <p>{errors.name.message}</p>
                :   null
                    }
                </div>

                <div className="form-fields">
                    <label>League:</label>
                        <input type="text" 
                        name="league" value={league}
                        onChange = {(e) => setLeague(e.target.value)}/>
                </div>
                
                <div className="col-4">
                    <div className="form-fields">
                    <label>Location:</label>
                        <input type="text" 
                        name="Location" value={location}
                        onChange = {(e) => setLocation(e.target.value)}/>
                </div>

                    
                </div>
                
                <br/>
                <button className="btn btn-primary" type="submit">Edit Match</button>
            </form>  
        </div>
    </div>
        </div>
        
    )
}

export default SCedit;