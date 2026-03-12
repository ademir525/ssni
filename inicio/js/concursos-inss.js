// Dados dos Concursos do INSS 2026
window.CONCURSOS_INSS = [
  {
    id: "tecnico",
    nome: "Técnico do Seguro Social",
    sigla: "TSS",
    descricao: "Concurso para Técnico do Seguro Social - Nível Médio. Realização de atividades administrativas e de atendimento previdenciário.",
    taxaInscricao: 85.00,
    vagas: 7000,
    salarioDurante: "R$ 5.938,52",
    salarioApos: "R$ 5.938,52",
    escolaridade: "Ensino Médio Completo",
    inscricaoInicio: "15/01/2026",
    inscricaoFim: "14/02/2026",
    provaData: "A definir",
    site: "www.gov.br/inss",
    cargos: [
      {
        id: "tecnico-seguro-social",
        nome: "Técnico do Seguro Social",
        vagas: 7000,
        salario: "R$ 5.938,52"
      }
    ]
  },
  {
    id: "analista",
    nome: "Analista do Seguro Social",
    sigla: "ANALISTA",
    descricao: "Concurso para Analista do Seguro Social - Nível Superior. Atividades de análise, planejamento e gestão de benefícios previdenciários.",
    taxaInscricao: 130.00,
    vagas: 1500,
    salarioDurante: "R$ 9.371,31",
    salarioApos: "R$ 9.371,31",
    escolaridade: "Nível Superior",
    inscricaoInicio: "15/01/2026",
    inscricaoFim: "14/02/2026",
    provaData: "A definir",
    site: "www.gov.br/inss",
    cargos: [
      {
        id: "analista-servico-social",
        nome: "Analista do Seguro Social - Serviço Social",
        categoria: "Serviço Social",
        vagas: 500,
        salario: "R$ 9.371,31"
      },
      {
        id: "analista-contabilidade",
        nome: "Analista do Seguro Social - Contabilidade",
        categoria: "Contabilidade",
        vagas: 200,
        salario: "R$ 9.371,31"
      },
      {
        id: "analista-direito",
        nome: "Analista do Seguro Social - Direito",
        categoria: "Direito",
        vagas: 300,
        salario: "R$ 9.371,31"
      },
      {
        id: "analista-ti",
        nome: "Analista do Seguro Social - Tecnologia da Informação",
        categoria: "Tecnologia da Informação",
        vagas: 250,
        salario: "R$ 9.371,31"
      },
      {
        id: "analista-administracao",
        nome: "Analista do Seguro Social - Administração",
        categoria: "Administração",
        vagas: 250,
        salario: "R$ 9.371,31"
      }
    ]
  },
  {
    id: "perito-medico",
    nome: "Perito Médico Federal",
    sigla: "PMF",
    descricao: "Concurso para Perito Médico Federal - Realização de perícias médicas para concessão de benefícios por incapacidade.",
    taxaInscricao: 150.00,
    vagas: 500,
    salarioDurante: "R$ 14.166,99",
    salarioApos: "R$ 14.166,99",
    escolaridade: "Medicina + CRM Ativo",
    inscricaoInicio: "15/01/2026",
    inscricaoFim: "14/02/2026",
    provaData: "A definir",
    site: "www.gov.br/inss",
    cargos: [
      {
        id: "perito-medico-federal",
        nome: "Perito Médico Federal",
        vagas: 500,
        salario: "R$ 14.166,99"
      }
    ]
  }
];

// Função para obter concurso por ID
window.getConcursoById = function(id) {
  return window.CONCURSOS_INSS.find(c => c.id === id);
};

// Função para formatar moeda
window.formatCurrency = function(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

console.log('Sistema de Concursos do INSS carregado');
console.log('Total de concursos disponíveis:', window.CONCURSOS_INSS.length);
