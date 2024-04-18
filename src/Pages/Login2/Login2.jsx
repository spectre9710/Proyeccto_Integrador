import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login2 = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        // Obtener los datos de usuario almacenados en el almacenamiento local
        const userDataString = localStorage.getItem("userData");
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            
            // Verificar si las credenciales coinciden con los datos almacenados
            if (email === userData.email && password === userData.password) {
                // Redirigir al usuario a la página principal después de iniciar sesión
                window.location = "/home";
            } else {
                setError("Correo electrónico o contraseña incorrectos");
            }
        } else {
            setError("Usuario no encontrado. Por favor, regístrate primero.");
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Himusic</h1>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Iniciar sesión
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>Nuevo aquí ?</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Registrarse
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login2;
