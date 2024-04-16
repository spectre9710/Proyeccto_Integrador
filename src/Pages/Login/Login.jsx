import React from "react";
import HeadPhone from '../../assets/img/music.png';
import './Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Himusic</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Música para todos</h1>
                            <p>Sin música la vida es aburrida</p>
                            <Link to={"/login2"} className="btn">
                                Empezar a escuchar
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;