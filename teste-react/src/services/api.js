// src/services/api.js


const buscarDados = (chave) => JSON.parse(localStorage.getItem(chave)) || [];
const salvarDados = (chave, dados) => localStorage.setItem(chave, JSON.stringify(dados));

export const equipamentoService = {
  listar: async () => ({ data: buscarDados('mineradora_equipamentos') }),
  criar: async (dados) => { 
    const lista = buscarDados('mineradora_equipamentos');
    lista.push({ ...dados, id: Date.now() }); 
    salvarDados('mineradora_equipamentos', lista);
    return {}; 
  }
};

export const apiService = {
  // Cidades
  listarCidades: async () => ({ data: buscarDados('mineradora_cidades') }),
  criarCidade: async (dados) => { 
    const lista = buscarDados('mineradora_cidades');
    lista.push({ ...dados, id: Date.now() }); 
    salvarDados('mineradora_cidades', lista);
    return {}; 
  },
  
  // Funcionários
  listarFuncionarios: async () => ({ data: buscarDados('mineradora_funcionarios') }),
  criarFuncionario: async (dados) => { 
    const lista = buscarDados('mineradora_funcionarios');
    lista.push({ ...dados, id: Date.now() }); 
    salvarDados('mineradora_funcionarios', lista);
    return {}; 
  },
  
  // Serviços
  listarServicos: async () => ({ data: buscarDados('mineradora_servicos') }),
  criarServico: async (dados) => { 
    const lista = buscarDados('mineradora_servicos');
    lista.push({ ...dados, id: Date.now() }); 
    salvarDados('mineradora_servicos', lista);
    return {}; 
  }
};