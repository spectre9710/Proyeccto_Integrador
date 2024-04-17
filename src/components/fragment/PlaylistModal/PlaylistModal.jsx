import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import "./PlaylistModal.scss";
import { Add, PlaylistPlay } from "@material-ui/icons";

const CreatePlaylistModal = ({ open, onClose, onCreatePlaylist }) => {
    const [playlistName, setPlaylistName] = useState("");

    const handleCreatePlaylist = () => {
        // Verificar que se haya ingresado un nombre de playlist
        if (playlistName.trim() !== "") {
            // Llamar a la función onCreatePlaylist con el nombre de la nueva playlist
            onCreatePlaylist(playlistName);
            onClose();
        } else {
            // Mostrar un mensaje de error si no se ingresó ningún nombre
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
        // Lógica para seleccionar la playlist con el ID dado
        console.log("Playlist seleccionada:", playlistId);
        onClose();
    };

    const handleCreateNewPlaylist = () => {
        // Lógica para mostrar el modal de creación de nueva playlist
        console.log("Crear nueva playlist");
        // Mostrar el modal de creación de nueva playlist
        setCreatePlaylistModalOpen(true);
    };

    const addPlaylist = (playlistName) => {
        // Generar un nuevo ID para la playlist
        const newPlaylistId = playlists.length + 1;
        // Agregar la nueva playlist a la lista de playlists
        const newPlaylist = { id: newPlaylistId, name: playlistName };
        setPlaylists([...playlists, newPlaylist]);
    };

    // Estado para controlar la apertura del modal de creación de nueva playlist
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
                        {/* Agrega más listas de reproducción aquí si es necesario */}
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
