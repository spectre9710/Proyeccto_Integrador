import React, {useContext} from 'react';
import '../FooterSelectMusic/FooterSelectMusic.scss';
import {ThemeContext} from "../../../api/Theme";
import {Link} from "react-router-dom";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={{backgroundColor:useStyle.subTheme}} className={"Footer_Select_Music"}>
            <Link to={"/home"}>
                Selecciona una canción para continuar
            </Link>
        </div>
    );
}

export default FooterSelectMusic;