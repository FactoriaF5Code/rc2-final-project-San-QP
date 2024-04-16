import "../Index/Index.css";
import "./Login.css"
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="index">
        <div className="indexContent">
          <section className="loginForm">
            <h1>¡Hola!<br/> ¿Novedades en tu huerto?</h1>
            <input type="text"
                placeholder="Correo electrónico|"
            />
            <input type="text"
                placeholder="Contraseña|"
            />
          </section>
          <Link to="/panel">INICIAR SESIÓN</Link>
        </div>
      </main>
  )
}
