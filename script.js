// ===== BANCO DE PERGUNTAS =====
// Array com todas as perguntas sobre Segurança do Trabalho e EPIs
const bancoPerguntas = [
    {
        pergunta: "Qual EPI é essencial para proteger a visão em operações de soldagem?",
        alternativas: ["Capacete", "Luvas", "Óculos de proteção", "Botina"],
        correta: 2,
        explicacao: "Óculos de proteção evitam lesões causadas por fagulhas e luz intensa durante a soldagem."
    },
    {
        pergunta: "Qual o principal objetivo do uso de EPI no ambiente de trabalho?",
        alternativas: ["Decoração", "Proteção contra riscos", "Conforto", "Identificação"],
        correta: 1,
        explicacao: "Os EPIs (Equipamentos de Proteção Individual) têm como objetivo principal proteger o trabalhador contra riscos que possam ameaçar sua segurança e saúde."
    },
    {
        pergunta: "Em caso de incêndio, qual a primeira ação a ser tomada?",
        alternativas: ["Tentar apagar o fogo sozinho", "Acionar o alarme de emergência", "Pegar objetos pessoais", "Gritar por ajuda"],
        correta: 1,
        explicacao: "A primeira ação deve ser acionar o alarme de emergência para alertar todos os ocupantes do local e os bombeiros."
    },
    {
        pergunta: "Qual EPI protege os pés contra quedas de objetos pesados?",
        alternativas: ["Tênis comum", "Sandália de segurança", "Botina com biqueira de aço", "Chinelo"],
        correta: 2,
        explicacao: "A botina com biqueira de aço protege os pés contra impactos de objetos pesados e perfurações."
    },
    {
        pergunta: "O que significa a sigla CIPA?",
        alternativas: ["Comissão Interna de Prevenção de Acidentes", "Comitê de Identificação de Perigos Ambientais", "Centro Interno de Proteção ao Ambiente", "Comissão de Inspeção de Produtos Agrícolas"],
        correta: 0,
        explicacao: "CIPA significa Comissão Interna de Prevenção de Acidentes, órgão responsável pela segurança no trabalho."
    },
    {
        pergunta: "Qual a cor da sinalização de segurança que indica PERIGO?",
        alternativas: ["Azul", "Verde", "Vermelho", "Amarelo"],
        correta: 2,
        explicacao: "A cor vermelha é utilizada para sinalizar perigo, proibição e equipamentos de combate a incêndio."
    },
    {
        pergunta: "Para trabalhos em altura, qual EPI é obrigatório?",
        alternativas: ["Luvas", "Cinto de segurança", "Óculos", "Protetor auricular"],
        correta: 1,
        explicacao: "O cinto de segurança (ou talabarte) é obrigatório para trabalhos em altura acima de 2 metros, evitando quedas."
    },
    {
        pergunta: "Qual EPI protege contra ruídos excessivos no ambiente de trabalho?",
        alternativas: ["Capacete", "Protetor auricular", "Máscara", "Luvas"],
        correta: 1,
        explicacao: "O protetor auricular (tipo plug ou concha) protege a audição contra ruídos que podem causar danos permanentes."
    },
    {
        pergunta: "O que deve ser feito antes de utilizar qualquer EPI?",
        alternativas: ["Lavá-lo", "Verificar se está em boas condições", "Compartilhar com colegas", "Guardá-lo"],
        correta: 1,
        explicacao: "Antes de usar qualquer EPI, é fundamental verificar se está em boas condições de uso, sem danos que comprometam sua proteção."
    },
    {
        pergunta: "Qual a finalidade da máscara respiratória no ambiente industrial?",
        alternativas: ["Proteger contra frio", "Proteger contra poeira e gases tóxicos", "Esconder o rosto", "Melhorar a respiração"],
        correta: 1,
        explicacao: "A máscara respiratória protege as vias aéreas contra poeira, fumaça, gases tóxicos e outros contaminantes do ar."
    },
    {
        pergunta: "De quem é a responsabilidade de fornecer EPIs aos trabalhadores?",
        alternativas: ["Do próprio trabalhador", "Do empregador", "Do sindicato", "Do governo"],
        correta: 1,
        explicacao: "É responsabilidade do empregador fornecer gratuitamente os EPIs adequados aos riscos de cada função."
    },
    {
        pergunta: "Qual a importância do treinamento sobre o uso de EPIs?",
        alternativas: ["Não é necessário", "Ensinar a usar corretamente e garantir proteção", "Apenas formalidade", "Perda de tempo"],
        correta: 1,
        explicacao: "O treinamento é essencial para que o trabalhador saiba usar corretamente o EPI e entenda sua importância para a própria segurança."
    },
    {
        pergunta: "Em ambientes com risco de choque elétrico, qual EPI é fundamental?",
        alternativas: ["Luvas isolantes", "Capacete comum", "Óculos de sol", "Botina comum"],
        correta: 0,
        explicacao: "Luvas isolantes são fundamentais para proteger contra choques elétricos em trabalhos com eletricidade."
    },
    {
        pergunta: "O que caracteriza um acidente de trabalho?",
        alternativas: ["Acidente fora do trabalho", "Acidente durante o trajeto casa-trabalho", "Acidente no horário de almoço", "Todas as alternativas podem caracterizar"],
        correta: 3,
        explicacao: "Acidentes de trajeto e durante intervalos no local de trabalho também são considerados acidentes de trabalho."
    },
    {
        pergunta: "Qual equipamento é usado para proteção contra produtos químicos?",
        alternativas: ["Avental de pano", "Avental de PVC/borracha", "Camiseta comum", "Jaqueta de couro"],
        correta: 1,
        explicacao: "O avental de PVC ou borracha protege contra respingos e contato com produtos químicos corrosivos."
    },
    {
        pergunta: "Qual a cor que indica ATENÇÃO/CUIDADO na sinalização de segurança?",
        alternativas: ["Verde", "Vermelho", "Amarelo", "Azul"],
        correta: 2,
        explicacao: "A cor amarela é usada para sinalizar atenção, cuidado e advertência de riscos."
    },
    {
        pergunta: "O que fazer ao identificar uma situação de risco no trabalho?",
        alternativas: ["Ignorar", "Comunicar imediatamente ao superior", "Esperar acontecer um acidente", "Resolver sozinho"],
        correta: 1,
        explicacao: "Ao identificar um risco, deve-se comunicar imediatamente ao superior ou responsável pela segurança para que medidas sejam tomadas."
    },
    {
        pergunta: "Qual EPI protege a cabeça contra impactos e quedas de objetos?",
        alternativas: ["Boné", "Chapéu", "Capacete de segurança", "Touca"],
        correta: 2,
        explicacao: "O capacete de segurança protege a cabeça contra impactos, perfurações e choques elétricos."
    },
    {
        pergunta: "O que são EPCs (Equipamentos de Proteção Coletiva)?",
        alternativas: ["Equipamentos individuais", "Dispositivos que protegem grupo de trabalhadores", "Ferramentas de trabalho", "EPIs compartilhados"],
        correta: 1,
        explicacao: "EPCs são equipamentos que protegem um grupo de trabalhadores, como extintores, guarda-corpos e ventilação adequada."
    },
    {
        pergunta: "Qual a validade do treinamento de segurança do trabalho?",
        alternativas: ["Vitalício", "Deve ser renovado periodicamente", "Apenas na admissão", "Não precisa de treinamento"],
        correta: 1,
        explicacao: "Os treinamentos de segurança devem ser renovados periodicamente e sempre que houver mudanças nos processos ou riscos."
    }
];

// ===== VARIÁVEIS GLOBAIS =====
let perguntasSelecionadas = []; // 10 perguntas aleatórias para o jogo
let perguntaAtual = 0; // Índice da pergunta atual
let pontuacao = 0; // Pontuação do jogador
let respostaJaMarcada = false; // Controle para evitar múltiplos cliques

// ===== ELEMENTOS DO DOM =====
const telaInicial = document.getElementById('tela-inicial');
const telaQuiz = document.getElementById('tela-quiz');
const telaResultado = document.getElementById('tela-resultado');

const btnIniciar = document.getElementById('btn-iniciar');
const btnProxima = document.getElementById('btn-proxima');
const btnJogarNovamente = document.getElementById('btn-jogar-novamente');

const numeroPergunta = document.getElementById('numero-pergunta');
const pontosDisplay = document.getElementById('pontos');
const perguntaTexto = document.getElementById('pergunta-texto');
const alternativasContainer = document.getElementById('alternativas-container');
const feedback = document.getElementById('feedback');
const feedbackTexto = document.getElementById('feedback-texto');

const pontuacaoFinal = document.getElementById('pontuacao-final');
const nivelClassificacao = document.getElementById('nivel-classificacao');
const mensagemFinal = document.getElementById('mensagem-final');

// ===== FUNÇÕES PRINCIPAIS =====

/**
 * Função para embaralhar array (algoritmo Fisher-Yates)
 * Usado para selecionar perguntas aleatórias
 */
function embaralharArray(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

/**
 * Inicia o jogo selecionando 10 perguntas aleatórias
 */
function iniciarJogo() {
    // Embaralha e seleciona 10 perguntas
    perguntasSelecionadas = embaralharArray(bancoPerguntas).slice(0, 10);
    perguntaAtual = 0;
    pontuacao = 0;
    
    // Atualiza interface
    pontosDisplay.textContent = `Pontos: ${pontuacao}`;
    
    // Muda para tela do quiz
    trocarTela(telaInicial, telaQuiz);
    
    // Mostra primeira pergunta
    mostrarPergunta();
}

/**
 * Exibe a pergunta atual na tela
 */
function mostrarPergunta() {
    respostaJaMarcada = false;
    const pergunta = perguntasSelecionadas[perguntaAtual];
    
    // Atualiza número da pergunta
    numeroPergunta.textContent = `Pergunta ${perguntaAtual + 1}/10`;
    
    // Atualiza texto da pergunta
    perguntaTexto.textContent = pergunta.pergunta;
    
    // Limpa alternativas anteriores
    alternativasContainer.innerHTML = '';
    
    // Esconde feedback
    feedback.classList.add('escondido');
    feedback.classList.remove('correto', 'incorreto');
    
    // Cria botões de alternativas
    pergunta.alternativas.forEach((alternativa, index) => {
        const btn = document.createElement('button');
        btn.className = 'alternativa';
        btn.textContent = alternativa;
        btn.addEventListener('click', () => selecionarResposta(index));
        alternativasContainer.appendChild(btn);
    });
}

/**
 * Processa a resposta selecionada pelo jogador
 */
function selecionarResposta(indexSelecionado) {
    if (respostaJaMarcada) return; // Evita múltiplos cliques
    respostaJaMarcada = true;
    
    const pergunta = perguntasSelecionadas[perguntaAtual];
    const alternativas = document.querySelectorAll('.alternativa');
    const respostaCorreta = pergunta.correta === indexSelecionado;
    
    // Marca a alternativa selecionada
    alternativas[indexSelecionado].classList.add('selecionada');
    
    // Desabilita todas as alternativas
    alternativas.forEach(alt => alt.classList.add('desabilitada'));
    
    // Aguarda um momento antes de mostrar o resultado
    setTimeout(() => {
        // Destaca a resposta correta
        alternativas[pergunta.correta].classList.add('correta');
        
        // Se errou, marca a alternativa incorreta
        if (!respostaCorreta) {
            alternativas[indexSelecionado].classList.add('incorreta');
        }
        
        // Mostra feedback
        mostrarFeedback(respostaCorreta, pergunta.explicacao);
        
        // Atualiza pontuação se acertou
        if (respostaCorreta) {
            pontuacao++;
            pontosDisplay.textContent = `Pontos: ${pontuacao}`;
        }
    }, 500);
}

/**
 * Exibe o feedback educativo da resposta
 */
function mostrarFeedback(acertou, explicacao) {
    feedback.classList.remove('escondido');
    
    if (acertou) {
        feedback.classList.add('correto');
        feedbackTexto.innerHTML = `<strong>✅ Parabéns! Resposta correta!</strong><br><br>${explicacao}`;
    } else {
        feedback.classList.add('incorreto');
        feedbackTexto.innerHTML = `<strong>❌ Resposta incorreta.</strong><br><br>${explicacao}`;
    }
}

/**
 * Avança para a próxima pergunta ou finaliza o jogo
 */
function proximaPergunta() {
    perguntaAtual++;
    
    if (perguntaAtual < perguntasSelecionadas.length) {
        // Ainda há perguntas
        mostrarPergunta();
    } else {
        // Fim do jogo
        mostrarResultado();
    }
}

/**
 * Exibe a tela de resultado final com classificação
 */
function mostrarResultado() {
    // Determina o nível baseado na pontuação
    let nivel, classeNivel, mensagem;
    
    if (pontuacao <= 3) {
        nivel = "Nível Básico";
        classeNivel = "basico";
        mensagem = "Continue estudando sobre segurança do trabalho! Todo conhecimento é importante para proteger você e seus colegas.";
    } else if (pontuacao <= 7) {
        nivel = "Nível Intermediário";
        classeNivel = "intermediario";
        mensagem = "Bom trabalho! Você tem conhecimentos importantes sobre segurança. Continue aprendendo para se tornar um expert!";
    } else {
        nivel = "Nível Avançado";
        classeNivel = "avancado";
        mensagem = "Excelente! Você domina os conceitos de segurança do trabalho. Parabéns pelo comprometimento com a segurança!";
    }
    
    // Atualiza interface de resultado
    pontuacaoFinal.textContent = pontuacao;
    nivelClassificacao.textContent = nivel;
    nivelClassificacao.className = `nivel ${classeNivel}`;
    mensagemFinal.textContent = `Você acertou ${pontuacao} de 10 perguntas. ${mensagem} Continue se protegendo e promovendo a segurança no trabalho!`;
    
    // Muda para tela de resultado
    trocarTela(telaQuiz, telaResultado);
}

/**
 * Reinicia o jogo do zero
 */
function jogarNovamente() {
    trocarTela(telaResultado, telaInicial);
}

/**
 * Alterna entre telas com animação
 */
function trocarTela(telaAtual, novaTela) {
    telaAtual.classList.remove('ativa');
    novaTela.classList.add('ativa');
}

// ===== EVENT LISTENERS =====
btnIniciar.addEventListener('click', iniciarJogo);
btnProxima.addEventListener('click', proximaPergunta);
btnJogarNovamente.addEventListener('click', jogarNovamente);

// Mensagem no console
console.log('🎮 Missão Segurança - Jogo carregado com sucesso!');
console.log(`📝 Total de ${bancoPerguntas.length} perguntas disponíveis no banco de dados.`);
