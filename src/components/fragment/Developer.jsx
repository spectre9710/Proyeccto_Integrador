import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/up.jpg";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Proyecto multidiciplinario</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile" />
                    <div className={"Card-details"}>
                        <h3>Himusic</h3>
                        <p>Luis Alberto</p>
                        <p>Luis Fernando</p>
                        <p>Alan Yahir Juárez Ramírez</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Himusic es una plataforma de música que permite a los usuarios descubrir y reproducir una amplia variedad de música de diferentes géneros y artistas..</p>
                    <p>Himusic está dirigido a cualquier persona apasionada por la música, desde aficionados casuales hasta melómanos ávidos de descubrir nuevos artistas y géneros musicales.</p>
                    <p>La plataforma se adapta a una amplia gama de gustos musicales y niveles de experiencia, proporcionando una experiencia de usuario satisfactoria para todos los amantes de la música.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://www.facebook.com/PolitecnicaChis/"} title={"UP Chiapas"}>
                            <Facebook />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} title={"Tutorial"}>
                            <YouTube />
                        </IconButton>
                        <IconButton target={"_blank"} href={""} title={""}>
                            <Instagram />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;
