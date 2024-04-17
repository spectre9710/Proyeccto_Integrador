import React, { useContext, useState } from "react";
import '../Navigation/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "../DropDownLanguageList/DropDownLanguageList";
import SearchBar from "../SearchBar/SearchBar";
import Brand from "../Brand/Brand";
import DropDownProfile from "../DropDownProfile/DropDownProfile";
import { Avatar, Button } from "@material-ui/core";
import { ThemeContext } from "../../../api/Theme";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    // Obtener la inicial del nombre del usuario desde el almacenamiento local
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const userInitial = storedUserData ? storedUserData.firstName.charAt(0).toUpperCase() : '';

    function handleOpenLanguageList() {
        if (isOpenProfile === true)
            setOpenProfile(!isOpenProfile);
        setLangList(!isLanguageListOpen);
    }

    function handleOpenProfile() {
        if (isLanguageListOpen === true)
            setLangList(!isLanguageListOpen);
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand />
            <SearchBar />
            <div className={"language"} onClick={handleOpenLanguageList}>
                <Button className={"Dropdown-btn"}
                    endIcon={isLanguageListOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}>
                    <div className="wrapper">
                        <p>Lenguaje</p>
                    </div>
                </Button>
                {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList />
                }
            </div>
            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                    startIcon={<Avatar style={{ width: '30px', height: '30px', padding: '18px' }} >{userInitial}</Avatar>}
                    endIcon={isOpenProfile ? <ExpandMoreIcon /> : <ExpandLessIcon />}>

                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile />
                }
            </div>
        </nav>
    );
}

export default Navigation;
