import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/logo.png"

class Brand extends React.Component {
    render() {
        return (
            <div className={"brand"}>
                <Link to={"/home"}>
                    <img src={Logo} alt="" className='logo' />
                </Link>
            </div>
        );
    }
}

export default Brand;