// src/pages/Servicos.jsx
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = async () => {
    try {
      const response = await apiService.listarServicos();
      setServicos(response.data || []);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    }
  };

  const cadastrar = async () => {
    if (!descricao || !status) return alert("Preencha todos os campos!");
    try {
      await apiService.criarServico({ descricao, status });
      setDescricao("");
      setStatus("");
      carregarServicos();
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  return (
    <div>
      <h2>Gestão de Serviços</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Novo Serviço</h3>
        <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} style={{ marginRight: '10px' }} />
        <input type="text" placeholder="Status (Ex: Em andamento)" value={status} onChange={(e) => setStatus(e.target.value)} style={{ marginRight: '10px' }} />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Serviços Cadastrados</h3>
      <ul>
        {servicos.map(serv => (
          <li key={serv.id}><strong>{serv.descricao}</strong> - Status: {serv.status}</li>
        ))}
      </ul>
    </div>
  );
}