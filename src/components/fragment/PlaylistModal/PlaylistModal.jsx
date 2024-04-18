import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import "./PlaylistModal.scss";
import { Add, PlaylistPlay } from "@material-ui/icons";

const CreatePlaylistModal = ({ open, onClose, onCreatePlaylist }) => {
    const [playlistName, setPlaylistName] = useState("");

    const handleCreatePlaylist = () => {
       
        if (playlistName.trim() !== "") {
            
            onCreatePlaylist(playlistName);
            onClose();
        } else {
          
            alert("Por favor, ingresa un nombre para la playlist.");
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="playlist-modal">
                <h2>Crear nueva playlist</h2>
                <TextField
                    label="Nombre de la playlist"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    fullWidth
                />
                <Button onClick={handleCreatePlaylist} color="primary">
                    Crear
                </Button>
            </div>
        </Modal>
    );
};

const PlaylistModal = ({ open, onClose }) => {
    const [playlists, setPlaylists] = useState([
        
    ]);

    const handlePlaylistSelection = (playlistId) => {
       
        console.log("Playlist seleccionada:", playlistId);
        onClose();
    };

    const handleCreateNewPlaylist = () => {
        
        console.log("Crear nueva playlist");
       
        setCreatePlaylistModalOpen(true);
    };

    const addPlaylist = (playlistName) => {
      
        const newPlaylistId = playlists.length + 1;
       
        const newPlaylist = { id: newPlaylistId, name: playlistName };
        setPlaylists([...playlists, newPlaylist]);
    };

   
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <div className="playlist-modal">
                    <h2>Guardar música en...</h2>
                    <ul>
                        {playlists.map((playlist) => (
                            <li key={playlist.id} onClick={() => handlePlaylistSelection(playlist.id)}>
                                <PlaylistPlay className="icon" />
                                {playlist.name}
                            </li>
                        ))}
                        <li onClick={handleCreateNewPlaylist}>
                            <Add className="icon" />
                            Crear nueva playlist
                        </li>
                    </ul>
                </div>
            </Modal>
            <CreatePlaylistModal
                open={createPlaylistModalOpen}
                onClose={() => setCreatePlaylistModalOpen(false)}
                onCreatePlaylist={addPlaylist}
            />
        </>
    );
};

export default PlaylistModal;