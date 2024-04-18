import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import MusicCard from "../../components/fragment/MusicCard/MusicCard";
import Container from "../../components/fragment/Container/Container";
import Grade from 'grade-js';
import SideBarOptions from "../../components/fragment/SideBarOptions/SideBarOptions";
import { PlaylistPlay, Favorite } from "@material-ui/icons";

function Profile() {

    const { playlists } = useSelector(state => state.musicReducer);
    const [favoriteSongs, setFavoriteSongs] = useState([]);

    

    useEffect(() => {
        const storedFavoriteSongs = JSON.parse(localStorage.getItem("favoriteSongs")) || [];
        const filteredSongs = playlists.filter(song => storedFavoriteSongs.includes(song.id));
        setFavoriteSongs(filteredSongs);
    }, [playlists]);
    

   

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const userName = storedUserData ? capitalizeFirstLetter(storedUserData.firstName.split(' ')[0]) : 'Usuario';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile">
                    <Avatar variant={"rounded"} src={require("../../assets/img/avatar2.jpg")}
                        style={{ width: "150px", height: "150px" }}>
                        VS
                    </Avatar>
                    <div className="profile-detail">
                        <h3>{userName}</h3>
                        <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                href={"/home/playlist/trap"} title={"Trap"} />
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/pop"}
                                title={"Pop"} />
                                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                href={"/home/playlist/reggaeton"} title={"Reggaeton"} />
                        </span>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Favoritos <Favorite/> </h3> 
                        <div className="most-played">
                            {favoriteSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;