import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("user"));
    if (usuarioLogado) {
      setUser(usuarioLogado);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Biblioteca Fafic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <button className="nav-link" onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => navigate("/Livros")}
              >
                Livros
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/")}>
                Sair
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron d-flex justify-content-center align-items-center mt-5">
        <div>
          <h1 class="display-4">Biblioteca Fafic</h1>
          <p class="lead">Bem-Vindo, {user.nome}</p>
          <hr class="my-4" />
          <p>Sistema de livro dedicado a fins de ajudar estudantes da instituicão FAFIC</p>
          <p class="lead"></p>
        </div>
      </div>
    </>
  );
};

export default Home;
