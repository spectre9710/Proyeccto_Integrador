import { useState } from "react";
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
		
		// Simular la autenticación con datos estáticos
		const mockUser = { email: "ejemplo@ejemplo.com", password: "contraseña" };
	
		if (email === mockUser.email && password === mockUser.password) {
			// Simular la obtención de un token de autenticación
			const mockToken = "mockAuthToken";
	
			// Almacenar el token en el almacenamiento local
			localStorage.setItem("token", mockToken);
	
			// Redireccionar al usuario a la página principal
			window.location = "/home";
		} else {
			// Mostrar un mensaje de error si la autenticación falla
			setError("Correo electrónico o contraseña no válidos");
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
