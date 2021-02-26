import React, {useState} from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Board from './components/Board'
import axios from "axios";
function App() {

    const adminUser = {
        username: "lemas",
        password:"admin123"
    }
    const [user, setUser] = useState({username:"", email:""})
    const [error, setError] = useState("");



    const login = details => {
        console.log(details.username +details.password );
        axios.post(`http://localhost/ADISE20_164630/back/lib/api.php/login`, {"username": details.username,"password": details.password}).then(res=>{
            console.log(res.data);


            console.log(res.data.errormesg);
        });



        if(details.username == adminUser.username && details.password == adminUser.password){
            console.log("Logged in");
            setError("");
            setUser({
                username: details.username
            });
        }else {
            console.log("Details do not match");
            setError("Details do not match");
        }
    }

    const logout = () => {
        setUser({username:""});
    }



    return (

        <div className="App">

            {(user.username != "") ? (
                <div className="welcome">
                    <Board />
                    <label className="yourColor">Το χρώμα σου:</label>
                    <div className="yourColor"></div>
                    <button className="logout" onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login = {login}  error = {error}/>
            )
            }
        </div>
      );
}


export default App;
