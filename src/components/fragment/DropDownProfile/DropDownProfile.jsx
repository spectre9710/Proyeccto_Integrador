// DropDownProfile.js
import React, { useContext } from "react";
import '../DropDownProfile/DropDownProfile.scss';
import { ThemeContext } from "../../../api/Theme";
import HoverButton from "../HoverButton/HoverButton";
import { AccountBox, ExitToApp, Delete } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    const history = useHistory();

    const handleLogout = () => {

        localStorage.removeItem("userSession");
       
        history.push("/login2");
    };

    const handleDeleteAccount = () => {
      
        localStorage.clear();
       
        history.push("/");
    };

    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"} />
            <HoverButton Icon={ExitToApp} onClick={handleLogout} text={"Cerrar sesión"} />
            <HoverButton Icon={Delete} onClick={handleDeleteAccount} text={"Eliminar cuenta"} />
        </div>
    );
};

export default DropDownProfile;