// En el componente superior que contiene tanto al Sidebar como al componente que contiene el PlaylistModal

import React, { useState } from "react";
import SideBar from "./SideBar"; // Ajusta la ruta según tu estructura de archivos
import PlaylistModal from "./PlaylistModal"; // Ajusta la ruta según tu estructura de archivos

function App() {
    const [playlists, setPlaylists] = useState([]);

    const addPlaylist = (playlistName) => {
        const newPlaylistId = playlists.length + 1;
        const newPlaylist = { id: newPlaylistId, name: playlistName };
        setPlaylists([...playlists, newPlaylist]);
    };

    return (
        <div className="App">
            <SideBar playlists={playlists} />
            <PlaylistModal playlists={playlists} addPlaylist={addPlaylist} />
            {/* Otros componentes de tu aplicación */}
        </div>
    );
}

export default App;
