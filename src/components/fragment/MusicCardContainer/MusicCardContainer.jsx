
/*{import React, { useEffect, useState } from "react";
import '../MusicCardContainer/MusicCardContainer.scss';
import MusicCard from "../MusicCard/MusicCard";
import Container from "../Container/Container";

function MusicCardContainer() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const storedMusic = JSON.parse(localStorage.getItem("musicDB")) || [];
        setPlaylists(storedMusic);
    }, []);

    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
}*/
import React from "react"
import '../MusicCardContainer/MusicCardContainer.scss';
import MusicCard from "../MusicCard/MusicCard";
import {useSelector} from "react-redux";
import Container from "../Container/Container";

function MusicCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;

