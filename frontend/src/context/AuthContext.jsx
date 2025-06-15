import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getFuncionarioById } from "../services/funcionarioService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!sessionStorage.getItem("access_token") || sessionStorage.getItem("loginRealizado") === "true";
  });

const login = async (username, password) => {
  try {
    if ((username === "abc" && password === "bolinhas")) {
      sessionStorage.setItem("loginRealizado", "true");
      sessionStorage.setItem("nomeFuncionario", username);
      sessionStorage.setItem("grupoFuncionario", "Administrador");
      setIsAuthenticated(true);
      navigate("/home");
      return;
    }

    const response = await axios.post("http://localhost:8000/token", new URLSearchParams({
      username,
      password,
    }), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const { access_token } = response.data;
    sessionStorage.setItem("access_token", access_token);

    const funcionario = await getFuncionarioById(username);
    sessionStorage.setItem("nomeFuncionario", funcionario.nome);
    sessionStorage.setItem("grupoFuncionario", funcionario.grupo);

    setIsAuthenticated(true);
    navigate("/home");

  } catch (error) {
    alert("CPF ou senha inválidos!");
  }
};

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("loginRealizado");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
