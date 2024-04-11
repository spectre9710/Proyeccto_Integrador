import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";
import Login2 from "../components/Pages/Login2";
import Signup from "../components/Pages/Singup";


const App = () => {
   
    const { language } = useSelector(state => state.musicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (language === null || language.includes("any")) {
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')) {
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item) => (
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    }, [dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login2" exact component={Login2} />
                </Switch>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
