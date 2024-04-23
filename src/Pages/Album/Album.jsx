import React, { useEffect, useState } from 'react';
import './Album.scss';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import Grade from 'grade-js';
import Container from '../../components/fragment/Container/Container';
import MusicCard from '../../components/fragment/MusicCard/MusicCard';

function Album() {

    const { playlists } = useSelector(state => state.musicReducer);
    const [nadieSongs, setNadieSongs] = useState([]);
    const [homerunSongs, setHomerunSongs] = useState([]);
    const [hollywoodSongs, setHollywoodSongs] = useState([]);
    const [veranoSongs, setVeranoSongs] = useState([]);
    const [coloresSongs, setColoresSongs] = useState([]);
    const [harrySongs, setHarrySongs] = useState([]);
    const [fineSongs, setFineSongs] = useState([]);
    const [beerbongsSongs, setBeerbongsSongs] = useState([]);
    const [finSongs, setFinSongs] = useState([]);
    
    
    useEffect(() => {
        const filteredNadieSongs = playlists.filter(song => song.img === "Nadie sabe lo que va a pasar mañana.png");
        setNadieSongs(filteredNadieSongs);

        const filteredHomerunSongs = playlists.filter(song => song.img === "Homerun.jpeg");
        setHomerunSongs(filteredHomerunSongs);

        const filteredHollywoodSongs = playlists.filter(song => song.img === "Hollywood's Bleeding.jpg");
        setHollywoodSongs(filteredHollywoodSongs);

        const filteredVeranoSongs = playlists.filter(song => song.img === "Un Verano Sin Ti.jpg");
        setVeranoSongs(filteredVeranoSongs);

        const filteredColoresSongs = playlists.filter(song => song.img === "Colores.jpeg");
        setColoresSongs(filteredColoresSongs);

        const filteredHarrySongs = playlists.filter(song => song.img === "Harry Styles.webp");
        setHarrySongs(filteredHarrySongs);

        const filteredFineSongs = playlists.filter(song => song.img === "Fine Line.webp");
        setFineSongs(filteredFineSongs); 

        const filteredBeerbongsSongs = playlists.filter(song => song.img === "beerbongs and bentleys.jpg");
        setBeerbongsSongs(filteredBeerbongsSongs); 

        
        const filteredFinSongs = playlists.filter(song => song.img === "Hasta el fin del mundo.jpeg");
        setFinSongs(filteredFinSongs); 
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    return (
        <Container>
            <div className={"Album"}>
                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Nadie sabe lo que va a pasar mañana.png")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Nadie sabe lo que va a pasar mañana</h3>
                        <p>Bad Bunny</p>
                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {nadieSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Homerun.jpeg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Homerun</h3>
                        <p>Paulo Londra</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {homerunSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Hollywood's Bleeding.jpg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Hollywood's Bleeding</h3>
                        <p>Post Malone</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {hollywoodSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Un Verano Sin Ti.jpg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Un Verano Sin Ti</h3>
                        <p>Bad Bunny</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {veranoSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Harry Styles.webp")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Harry Styles</h3>
                        <p>Harry Styles</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {harrySongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Colores.jpeg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Colores</h3>
                        <p>J Balvin</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {coloresSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Harry Styles.webp")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Harry Styles</h3>
                        <p>Harry Styles</p>
                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {harrySongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Fine Line.webp")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Fine Line</h3>
                        <p>Harry Styles</p>

                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {fineSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/beerbongs and bentleys.jpg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Beerbongs And Bentleys</h3>
                        <p>Post Malone</p>
                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {beerbongsSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="top-album">
                    <Avatar variant={"rounded"} src={require("../../assets/img/Hasta el fin del mundo.jpeg")}
                        style={{ width: "170px", height: "170px" }}>
                        VS
                    </Avatar>
                    <div className="album-detail">
                        <h3>Hasta el Fin del Mundo</h3>
                        <p>Kevin Kaarl</p>
                    </div>
                </div>
                <div className="bottom-album">
                    <div>
                        <div className="most-played">
                            {finSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))}
                        </div>
                    </div>
                </div>
                </div>
        </Container>
    );
}

export default Album;
