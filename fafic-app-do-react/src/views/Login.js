import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { messagemSucesso, messagemErro } from "../utils/toastr";
import Logo from "../img/logo.png";

export default function Login() {
  const [login, setValues] = useState({});
  const navigate = useNavigate();

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...login, [name]: value });
  }

  function onSubmit() {
    console.log("Valores ", login);

    axios
      .post("http://localhost:8080/login", login)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        messagemSucesso("Login efetuado com sucesso");
        navigate("/home");
      })
      .catch((erro) => messagemErro("Login ou Senha Inválida"));
  }

  function limparCampos() {
    setValues({});
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="">
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
      </nav>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card bg-white">
          <div className="card-header text-center bg-secondary">
            <img
              src={Logo}
              alt="Biblioteca Fafic"
              title="Biblioteca Fafic"
              className="img-fluid mx-auto d-block"
              style={{ maxWidth: "350px", maxHeight: "350px" }}
            />
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  name="usuario"
                  id="username"
                  onChange={onChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  name="senha"
                  id="password"
                  onChange={onChange}
                />
              </div>
              <div className="text-center mt-4">
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="btn btn-primary custom-button"
                    style={{ width: "45%" }}
                  >
                    Entrar
                  </button>
                  <Link
                    to="/registro"
                    className="btn btn-primary custom-button"
                    style={{ width: "45%" }}
                  >
                    Cadastrar
                  </Link>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={limparCampos}
                    className="btn btn-danger custom-button"
                    style={{ width: "45%" }}
                  >
                    Limpar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted text-center">
            <small>
              &copy; {new Date().getFullYear()} Biblioteca Fafic. Todos os
              direitos reservados.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
