import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messagemErro, messagemSucesso } from "../utils/toastr";

const CadastroLivro = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState({
    nome: "",
    isbn: ""
  });

  useEffect(() => {
    if (id) {
      carregarLivro();
    }
  }, [id]);

  const carregarLivro = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/livro/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error(error);
      messagemErro(
        "Ocorreu um erro ao carregar as informações do livro. Por favor, tente novamente."
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/livro/${id}`, livro);
        messagemSucesso("Livro atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8080/livro", livro);
        messagemSucesso("Livro cadastrado com sucesso!");
      }
      navigate("/livros");
    } catch (error) {
      console.error(error);
      messagemErro("Ocorreu um erro ao salvar o livro. Por favor, tente novamente.");
    }
  };

  const handleClear = () => {
    setLivro({ nome: "", isbn: "" });
  };

  const handleChange = (event) => {
    setLivro({
      ...livro,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
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
              <button className="nav-link" onClick={() => navigate("/home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/livros")}>
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
      <ToastContainer autoClose={3000} />
      <br></br>
      <div className="container">
        <div className="mb-3">
          <a href="/livros" className="btn btn-primary">
            Ver Todos
          </a>
        </div>
        <div className="card p-5 mx-auto mt-5" style={{ width: "500px" }}>
          <h3 className="card-title text-center mb-4">Cadastro de Livro</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={livro.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN:</label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                value={livro.isbn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <button type="submit" className="btn btn-primary">
                  {id ? "Atualizar Livro" : "Cadastrar Livro"}
                </button>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleClear}>
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroLivro;
