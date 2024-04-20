import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import "../EditMusicModal/EditMusicModal.scss";

const EditMusicModal = ({ open, onClose, music }) => {
    const [name, setName] = useState(music.name);
    const [authorName, setAuthorName] = useState(music.author_name);

    const handleSaveChanges = () => {
        // Aquí puedes implementar la lógica para guardar los cambios en la música
        console.log("Nombre de la canción actualizado:", name);
        console.log("Nombre del artista actualizado:", authorName);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="edit-music-modal">
                <h2>Editar música</h2>
                <TextField
                    label="Nombre de la canción"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Nombre del artista"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    fullWidth
                />
                <Button onClick={handleSaveChanges} color="primary">
                    Guardar cambios
                </Button>
            </div>
        </Modal>
    );
};

export default EditMusicModal;
