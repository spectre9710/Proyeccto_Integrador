import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const history = useHistory();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storedData = localStorage.getItem("userData");
        if (storedData) {
            const existingData = JSON.parse(storedData);
            if (existingData.email === data.email) {
                setError("El correo electrónico ya está registrado");
                return;
            }
        }
        localStorage.setItem("userData", JSON.stringify(data));
        history.push("/login2");
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Bienvenido</h1>
                    <Link to="/login2">
                        <button type="button" className={styles.white_btn}>
                            Iniciar sesión
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Crea una cuenta nueva</h1>
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
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
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
