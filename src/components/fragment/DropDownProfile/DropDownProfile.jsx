import React, { useContext } from "react";
import '../DropDownProfile/DropDownProfile.scss';
import { ThemeContext } from "../../../api/Theme";
import HoverButton from "../HoverButton/HoverButton";
import { AccountBox, ExitToApp } from "@material-ui/icons";


const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"} />
            <HoverButton Icon={ExitToApp} variant={"text"} text={"About"} />
        </div>
    );
}
export default DropDownProfile;