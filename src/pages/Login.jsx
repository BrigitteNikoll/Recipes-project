import React from "react";
import imgFondo from "../assets/fondo.png";
import group from "../assets/group.jpg";

const Login = () => {
  return (
    <main id="login">
      <div className="lg:col-span-7 lg:flex hidden">
        <img
          className="w-full h-full object-cover"
          src={imgFondo}
          alt="ksjfkd"
        />
      </div>
      <div className="bg-slate-600 lg:col-span-5 overflow-auto">
        <div className="">
          <img src={group} alt="dkfjvklv" />
          <p>¡Bienvenido!</p>
          <p>
            ¿Listo para darte un gustito?
          </p>
        </div>
        <form>
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Contraseña"
          />
          <label>User Type</label>
          <select >
            <option value="mesero">Mesero</option>
            <option value="cheff">Cheff</option>
            <option value="admin">Admin</option>
          </select>

          <button>
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
