import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext, themes } from "./api/Theme";
import musicDB from "./db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "./actions/actions";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Login2 from "./Pages/Login2/Login2";


const App = () => {
   
    const { language } = useSelector(state => state.musicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (language === null || language.includes("Español")) {
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('Ingles')) {
            alert("No hay pistas en ingles disponibles")
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
