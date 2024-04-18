import React, { useContext, useState } from 'react';
import '../HoverButton/HoverButton.scss';
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../../api/Theme";
import { Link } from "react-router-dom";

function HoverButton({ text, variant, Icon, onClick }) {
    const useStyle = useContext(ThemeContext);
    const [currStyle, setCurrStyle] = useState(null);
    
    const handleOver = () => {
        setCurrStyle(useStyle.button.onHover)
    };
    
    const handleOut = () => {
        setCurrStyle(null)
    };

    return (
        <Link to={onClick ? "/" : `/home/${text.toLowerCase()}`} className={"hb"}>
            <Button 
                style={currStyle}
                startIcon={Icon ? <Icon /> : null}
                variant={variant}   
                onMouseOver={handleOver} 
                onMouseOut={handleOut}
                onClick={onClick}
            >
                {text}
            </Button>
        </Link>
    );
}

export default HoverButton;
