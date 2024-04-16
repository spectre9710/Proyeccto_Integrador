import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import '../MobileTopNavigation/MobTopNav.scss';
import Brand from "../Brand/Brand";

class MobileTopNavigation extends React.Component{
    render() {
        return(
            <nav className="mob-top-navigation"z>
                <Brand/>
                <SearchBar/>
            </nav>
        );
    }
}

export default MobileTopNavigation;