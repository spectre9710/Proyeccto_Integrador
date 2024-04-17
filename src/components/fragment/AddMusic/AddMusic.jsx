import React, { useContext, useEffect, useRef, useState } from 'react';
import '../AddMusic/AddMusic.scss';
import { Add, Image, MusicNoteTwoTone } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../../api/Theme";
import musicDB from "../../../db/music";

function AddMusic() {
    const useStyle = useContext(ThemeContext);
    const imageRef = useRef();
    const musicRef = useRef(); 
    const [selectedImage, setSelectedImage] = useState(null); 
    const [selectedMusic, setSelectedMusic] = useState(null); 
    const [nameMusic, setNameMusic] = useState("");
    const [nameSinger, setNameSinger] = useState("");
    const [language, setLanguage] = useState("0");
    const [imagePreview, setImagePreview] = useState(""); 
    const [musicPreview, setMusicPreview] = useState("");

    const selectImage = () => {
        imageRef.current.click();
    };

    const selectMusic = () => {
        musicRef.current.click();
    };

       const addMusic = () => {
        const newMusic = {
            id: musicDB.length,
            name: nameMusic,
            author_name: nameSinger,
            img: selectedImage,
            lang: language === "1" ? "Español" : "Ingles",
            timesPlayed: 0,
            type: "custom",
            musicName: selectedMusic,
        };
        musicDB.push(newMusic);
    };

    useEffect(() => {
        imageRef.current.onchange = (e) => {
            setSelectedImage(e.target.files[0].name);
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setImagePreview(url);
        };
        musicRef.current.onchange = (e) => {
            setSelectedMusic(e.target.files[0].name);
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setMusicPreview(url);
        };
    }, []);

    let id = musicDB[musicDB.length - 1].id + 1;

    return (
        <form style={useStyle.component} className={"AddMusic"}>
            <div className="add-music-sub-container">
                <div className="d1">
                    <Button onClick={selectImage} style={{ backgroundColor: useStyle.subTheme, width: "200px", height: "200px" }} variant={"contained"} >
                        {imagePreview ? (
                            <img src={imagePreview} alt="Music Cover" style={{ width: "100%", height: "100%" }} />
                        ) : (
                            <Image titleAccess={"Select a music cover"} style={{ color: "#f0f0f0", width: "150px", height: "150px" }} />
                        )}
                    </Button>
                    <input ref={imageRef} accept="image/*" type="file" hidden id={"music-img"} />
                    <Button onClick={selectMusic} style={{ backgroundColor: useStyle.subTheme, width: "200px", height: "200px" }} variant={"contained"} >
                        <MusicNoteTwoTone titleAccess={"Select a music"} style={{ color: "#f0f0f0", width: "150px", height: "150px" }} />
                    </Button>
                    <input ref={musicRef} accept="audio/*" type="file" hidden />
                    {musicPreview && (
                        <audio controls src={musicPreview} style={{ marginTop: '20px' }}>
                            Su navegador no soporta el elemento de audio.
                        </audio>
                    )}
                    <select onChange={(e) => setLanguage(e.target.value)}>
                        <option value="0">Selecciona el lenguaje</option>
                        <option value="1">Español</option>
                        <option value="2">Ingles</option>
                    </select>
                </div>
                <div className="d2">
                    <div>
                        <input type="text" value={"ID: " + id} disabled />
                        <input type="text" placeholder={"Nombre"} id={"name"} onChange={(e) => setNameMusic(e.target.value)} />
                        <input type="text" placeholder={"Nombre del cantante"} id={"artist"} onChange={(e) => setNameSinger(e.target.value)} />
                        <Button style={{ backgroundColor: useStyle.theme }} variant={"contained"} endIcon={<Add />} onClick={addMusic}>
                            Agregar
                        </Button>
                    </div>
                    <div className={"preview"}>
                        <h3>Vista previa</h3>
                        {selectedImage && <p>Imagen : {selectedImage}</p>}
                        {selectedMusic && <p>Música : {selectedMusic}</p>}
                        <p>Nombre de la música : {nameMusic}</p>
                        <p>Nombre del cantante : {nameSinger}</p>
                        <p>Lenguaje : {language === "0" ? "Selecciona el lenguaje" : language === "1" ? "Español" : "Inglés"}</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddMusic;

