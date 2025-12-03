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
    },
    // NR-6 - Equipamentos de Proteção Individual
    {
        pergunta: "Segundo a NR-6, é obrigação do empregador quanto ao EPI:",
        alternativas: ["Vender ao trabalhador", "Fornecer gratuitamente e adequado ao risco", "Apenas recomendar o uso", "Descontar do salário"],
        correta: 1,
        explicacao: "A NR-6 estabelece que o empregador deve fornecer gratuitamente o EPI adequado ao risco, em perfeito estado de conservação e funcionamento."
    },
    {
        pergunta: "Conforme NR-6, o que o trabalhador deve fazer com o EPI danificado?",
        alternativas: ["Usar mesmo assim", "Jogar no lixo", "Comunicar ao empregador", "Consertar por conta própria"],
        correta: 2,
        explicacao: "O trabalhador deve comunicar imediatamente ao empregador qualquer alteração que torne o EPI impróprio para uso."
    },
    // NR-10 - Segurança em Instalações Elétricas
    {
        pergunta: "De acordo com a NR-10, trabalhos em instalações elétricas energizadas acima de 50V devem ser realizados por:",
        alternativas: ["Qualquer trabalhador", "Trabalhadores autorizados e capacitados", "Apenas engenheiros", "Estagiários"],
        correta: 1,
        explicacao: "A NR-10 exige que somente trabalhadores autorizados, qualificados e capacitados podem realizar intervenções em instalações elétricas energizadas."
    },
    {
        pergunta: "Segundo a NR-10, antes de iniciar trabalhos em circuitos elétricos, deve-se:",
        alternativas: ["Começar imediatamente", "Desenergizar e sinalizar", "Apenas usar luvas", "Trabalhar molhado"],
        correta: 1,
        explicacao: "A NR-10 estabelece que os circuitos devem ser desenergizados, sinalizados e aterrados antes do início dos trabalhos, sempre que tecnicamente possível."
    },
    // NR-12 - Máquinas e Equipamentos
    {
        pergunta: "A NR-12 determina que as zonas de perigo das máquinas devem possuir:",
        alternativas: ["Apenas avisos", "Sistemas de proteção", "Pintura especial", "Nada é necessário"],
        correta: 1,
        explicacao: "A NR-12 exige sistemas de proteção para impedir o acesso às zonas de perigo ou que tornem seguro o acesso quando necessário."
    },
    {
        pergunta: "Conforme NR-12, o botão de emergência das máquinas deve ser:",
        alternativas: ["Verde e difícil de acessar", "Vermelho e de fácil acesso", "Amarelo e escondido", "Azul e pequeno"],
        correta: 1,
        explicacao: "A NR-12 estabelece que os dispositivos de parada de emergência devem ser posicionados em locais de fácil acesso e visualização, com cor vermelha."
    },
    // NR-17 - Ergonomia
    {
        pergunta: "A NR-17 estabelece que o transporte manual de cargas deve considerar:",
        alternativas: ["Apenas a vontade do trabalhador", "As características e limitações do trabalhador", "Somente o peso da carga", "Não há restrições"],
        correta: 1,
        explicacao: "A NR-17 determina que o transporte manual de cargas deve considerar as características individuais e limitações do trabalhador para não comprometer sua saúde."
    },
    {
        pergunta: "Segundo a NR-17, qual o peso máximo que um trabalhador pode transportar individualmente?",
        alternativas: ["Sem limite", "60 kg", "100 kg", "40 kg"],
        correta: 1,
        explicacao: "A NR-17 estabelece que o peso máximo para transporte manual individual é de 60 kg, desde que respeitadas as características e condições do trabalhador."
    },
    // NR-23 - Proteção Contra Incêndio
    {
        pergunta: "A NR-23 determina que os extintores de incêndio devem ser inspecionados:",
        alternativas: ["Apenas quando esvaziam", "Anualmente", "Periodicamente conforme normas técnicas", "Nunca"],
        correta: 2,
        explicacao: "A NR-23 exige inspeções periódicas dos extintores conforme as normas técnicas oficiais, garantindo sua eficácia em caso de necessidade."
    },
    {
        pergunta: "Conforme NR-23, as saídas de emergência devem:",
        alternativas: ["Ser trancadas sempre", "Permanecer desobstruídas e sinalizadas", "Ser decoradas", "Ficar escondidas"],
        correta: 1,
        explicacao: "A NR-23 estabelece que as saídas de emergência devem permanecer desobstruídas, sinalizadas e em perfeitas condições de uso."
    },
    {
        pergunta: "Segundo a NR-23, todos os trabalhadores devem:",
        alternativas: ["Conhecer apenas seu trabalho", "Receber treinamento sobre prevenção e combate a incêndio", "Ignorar alarmes", "Trabalhar sem instruções"],
        correta: 1,
        explicacao: "A NR-23 exige que todos os trabalhadores sejam treinados sobre as medidas de prevenção de incêndios e uso dos equipamentos de combate."
    },
    {
        pergunta: "De acordo com a NR-23, qual a distância máxima para alcançar um extintor em áreas de risco?",
        alternativas: ["50 metros", "25 metros", "100 metros", "Não há limite"],
        correta: 1,
        explicacao: "A NR-23 estabelece que a distância máxima a percorrer para alcançar um extintor deve ser de 25 metros em áreas de maior risco."

    }
];

// ===== MENSAGENS ENGRAÇADAS BASEADAS NO TEMPO =====
const mensagensRapidas = [
    "Você é um ninja da segurança! Completou em tempo recorde!",
    "Rápido como um raio! Sua velocidade em segurança é impressionante!",
    "Velocidade supersônica! Você voa pelos EPIs!",
    "Tão rápido que nem deu tempo de piscar! Mestre da segurança!",
    "Você é o Flash da segurança do trabalho!",
    "Completou antes que eu pudesse dizer 'EPI'!",
    "Velocidade de luz! Sua segurança é imbatível!",
    "Rápido demais para o perigo te alcançar!",
    "Você corre mais que um extintor em chamas!",
    "Tempo recorde! Você é o campeão dos EPIs!",
    "Completou tão rápido que salvou tempo para uma pausa segura!",
    "Velocidade impressionante! Você é o herói da segurança!"
];

const mensagensMedias = [
    "Bom ritmo! Poderia ter sido um pouco mais rápido, mas ainda assim impressionante.",
    "Ritmo constante! Você mantém a segurança em alta velocidade.",
    "Tempo decente! Sua paciência com a segurança é admirável.",
    "Nem rápido, nem lento... perfeito equilíbrio na segurança!",
    "Você vai no seu ritmo! Segurança com estilo próprio.",
    "Tempo médio, mas conhecimento máximo!",
    "Ritmo sustentável! Segurança que dura.",
    "Você pensa antes de agir... sempre uma boa prática!",
    "Tempo bom! Você reflete sobre cada resposta de segurança.",
    "Ritmo confortável! Segurança sem pressa.",
    "Você leva o tempo necessário... e acerta tudo!",
    "Tempo equilibrado! Segurança em harmonia."
];

const mensagensLentas = [
    "Ufa! Esse tempo poderia ter salvado uma vida... ou pelo menos construído uma fortaleza de EPIs!",
    "Devagar e sempre! Pelo menos você teve tempo para pensar em cada EPI.",
    "Tempo suficiente para montar um teatro de segurança!",
    "Com esse tempo, você poderia ter inventado um novo EPI!",
    "Devagar, mas com segurança... muita segurança!",
    "Tempo de sobra! Poderia ter escrito um livro sobre EPIs.",
    "Você teve tempo para decorar todas as NRs!",
    "Devagar e firme! Pelo menos não houve acidentes.",
    "Com esse ritmo, você poderia ter construído uma cidade segura!",
    "Tempo generoso! Poderia ter treinado uma equipe inteira.",
    "Devagar, mas acertando tudo! Segurança acima de tudo.",
    "Ufa! Pelo menos você chegou lá... com estilo!"
];

// ===== VARIÁVEIS GLOBAIS =====
let perguntasSelecionadas = []; // Perguntas selecionadas dinamicamente
let perguntaAtual = 0; // Índice da pergunta atual
let pontuacao = 0; // Pontuação do jogador (acertos)
let respostaJaMarcada = false; // Controle para evitar múltiplos cliques
let tempoRestante = 20; // Tempo em segundos para cada pergunta
let intervaloCronometro = null; // Referência do intervalo do cronômetro
let timeoutAvanco = null; // Referência do timeout de avanço automático
let startTime = null; // Tempo de início do quiz
let wrongAnswers = 0; // Número de respostas erradas
let askedIndices = new Set(); // Índices das perguntas já feitas
let totalPerguntasRespondidas = 0; // Total de perguntas respondidas

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
const situacaoAprovacao = document.getElementById('situacao-aprovacao');
const mensagemFinal = document.getElementById('mensagem-final');
const tempoRestanteDisplay = document.getElementById('tempo-restante');

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
 * Seleciona uma pergunta aleatória que ainda não foi feita
 */
function selecionarPerguntaAleatoria() {
    if (askedIndices.size >= bancoPerguntas.length) {
        // Todas as perguntas foram feitas, reinicia o set
        askedIndices.clear();
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * bancoPerguntas.length);
    } while (askedIndices.has(randomIndex));

    askedIndices.add(randomIndex);
    return bancoPerguntas[randomIndex];
}

/**
 * Inicia o jogo selecionando perguntas dinamicamente
 */
function iniciarJogo() {
    // Inicializa variáveis
    perguntasSelecionadas = [];
    perguntaAtual = 0;
    pontuacao = 0;
    wrongAnswers = 0;
    askedIndices = new Set();
    totalPerguntasRespondidas = 0;
    startTime = Date.now();

    // Seleciona 10 perguntas únicas aleatoriamente
    for (let i = 0; i < 10; i++) {
        perguntasSelecionadas.push(selecionarPerguntaAleatoria());
    }

    // Atualiza interface
    pontosDisplay.textContent = `Pontos: ${pontuacao}`;

    // Muda para tela do quiz
    trocarTela(telaInicial, telaQuiz);

    // Mostra primeira pergunta
    mostrarPergunta();
}

/**
 * Inicia o cronômetro de 20 segundos
 */
function iniciarCronometro() {
    tempoRestante = 20;
    atualizarDisplayCronometro();
    
    // Para qualquer cronômetro anterior
    if (intervaloCronometro) {
        clearInterval(intervaloCronometro);
    }
    
    // Reseta o estado visual do cronômetro (remove alerta crítico)
    const cronometroElement = document.querySelector('.cronometro');
    if (cronometroElement) {
        cronometroElement.classList.remove('tempo-critico');
    }
    
    // Inicia novo cronômetro
    intervaloCronometro = setInterval(() => {
        tempoRestante--;
        atualizarDisplayCronometro();
        
        // Quando chega a 5 segundos, muda para cor crítica
        if (tempoRestante <= 5) {
            const cronometroElement = document.querySelector('.cronometro');
            if (cronometroElement) {
                cronometroElement.classList.add('tempo-critico');
            }
        }
        
        // Quando o tempo acaba
        if (tempoRestante <= 0) {
            clearInterval(intervaloCronometro);
            intervaloCronometro = null;
            tempoEsgotado();
        }
    }, 1000);
}

/**
 * Para o cronômetro e cancela qualquer avanço automático pendente
 */
function pararCronometro() {
    if (intervaloCronometro) {
        clearInterval(intervaloCronometro);
        intervaloCronometro = null;
    }
    
    // Cancela timeout de avanço automático se existir
    if (timeoutAvanco) {
        clearTimeout(timeoutAvanco);
        timeoutAvanco = null;
    }
    
    // Remove classe de tempo crítico do elemento cronometro
    const cronometroElement = document.querySelector('.cronometro');
    if (cronometroElement) {
        cronometroElement.classList.remove('tempo-critico');
    }
}

/**
 * Atualiza o display do cronômetro
 */
function atualizarDisplayCronometro() {
    tempoRestanteDisplay.textContent = `⏱️ ${tempoRestante}s`;
}

/**
 * Função chamada quando o tempo se esgota
 */
function tempoEsgotado() {
    if (respostaJaMarcada) return; // Se já respondeu, não faz nada
    respostaJaMarcada = true;

    // Atualiza contadores para tempo esgotado (considerado como resposta errada)
    totalPerguntasRespondidas++;
    wrongAnswers++;

    const pergunta = perguntasSelecionadas[perguntaAtual];
    const alternativas = document.querySelectorAll('.alternativa');

    // Desabilita todas as alternativas
    alternativas.forEach(alt => alt.classList.add('desabilitada'));

    // Destaca a resposta correta
    alternativas[pergunta.correta].classList.add('correta');

    // Mostra feedback de tempo esgotado
    mostrarFeedback(false, `Tempo esgotado! ${pergunta.explicacao}`);

    // Avança automaticamente após 3 segundos
    timeoutAvanco = setTimeout(() => {
        proximaPergunta();
    }, 3000);
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
    
    // Inicia o cronômetro
    iniciarCronometro();
}

/**
 * Processa a resposta selecionada pelo jogador
 */
function selecionarResposta(indexSelecionado) {
    if (respostaJaMarcada) return; // Evita múltiplos cliques
    respostaJaMarcada = true;

    // Para o cronômetro
    pararCronometro();

    const pergunta = perguntasSelecionadas[perguntaAtual];
    const alternativas = document.querySelectorAll('.alternativa');
    const respostaCorreta = pergunta.correta === indexSelecionado;

    // Atualiza contadores
    totalPerguntasRespondidas++;
    if (!respostaCorreta) {
        wrongAnswers++;
    }

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
    // Cancela qualquer timeout de avanço automático pendente
    if (timeoutAvanco) {
        clearTimeout(timeoutAvanco);
        timeoutAvanco = null;
    }
    
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
 * Exibe a tela de resultado final com classificação e aprovação/reprovação
 */
function mostrarResultado() {
    // Para o cronômetro se ainda estiver rodando
    pararCronometro();

    // Log dos contadores para verificação
    console.log(`Total perguntas respondidas: ${totalPerguntasRespondidas}, Acertos: ${pontuacao}, Erros: ${wrongAnswers}`);

    // Determina o nível e situação baseado na pontuação
    let nivel, classeNivel, mensagem, situacao, classeSituacao;
    
    if (pontuacao <= 3) {
        nivel = "Nível Básico";
        classeNivel = "basico";
        situacao = "REPROVADO";
        classeSituacao = "reprovado";
        mensagem = "Continue estudando sobre segurança do trabalho! Todo conhecimento é importante para proteger você e seus colegas.";
    } else if (pontuacao <= 7) {
        nivel = "Nível Intermediário";
        classeNivel = "intermediario";
        situacao = "APROVADO";
        classeSituacao = "aprovado";
        mensagem = "Bom trabalho! Você tem conhecimentos importantes sobre segurança. Continue aprendendo para se tornar um expert!";
    } else {
        nivel = "Nível Avançado";
        classeNivel = "avancado";
        situacao = "APROVADO";
        classeSituacao = "aprovado";
        mensagem = "Excelente! Você domina os conceitos de segurança do trabalho. Parabéns pelo comprometimento com a segurança!";
    }
    
    // Atualiza interface de resultado
    pontuacaoFinal.textContent = pontuacao;
    nivelClassificacao.textContent = nivel;
    nivelClassificacao.className = `nivel ${classeNivel}`;
    situacaoAprovacao.textContent = situacao;
    situacaoAprovacao.className = `situacao ${classeSituacao}`;
    mensagemFinal.textContent = `Você respondeu ${totalPerguntasRespondidas} perguntas, acertou ${pontuacao}, errou ${wrongAnswers}. ${mensagem} Continue se protegendo e promovendo a segurança no trabalho!`;
    
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
