import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navBar/NavBar";
import "./loginpage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar usuario en localStorage
    const userData = {
      email,
      password,
      logged: true,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Redirigir al catálogo
    navigate("/catalogo");
  };

  return (
    <div>
      <NavBar />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (  
    <div className="login-container">
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btnPrimary" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};
