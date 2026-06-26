// src/services/api.js

export const equipamentoService = {
  listar: async () => ({ data: [] }),
  criar: async (dados) => { console.log("Equipamento simulado:", dados); return {}; }
};

export const apiService = {
  listarCidades: async () => ({ data: [] }),
  criarCidade: async (dados) => { console.log("Cidade simulada:", dados); return {}; },
  
  listarFuncionarios: async () => ({ data: [] }),
  criarFuncionario: async (dados) => { console.log("Funcionário simulado:", dados); return {}; },
  
  listarServicos: async () => ({ data: [] }),
  criarServico: async (dados) => { console.log("Serviço simulado:", dados); return {}; }
};