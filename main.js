//Pegando id='resposta' lá no HTML
const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

//Clicando em Fazer Pergunda
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return //Toda função que encontra um "return" para de ser executada
  }

  buttonPerguntar.setAttribute('disabled', true) //Desabilitando o botão após fazer a pergunta

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //Gerando número aleatório do tamanho do Array
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  //Mandando a resposta para o HTML onde se encontra o id='resposta' |Buscando as respostas aleatoriamente no Array
  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  respostaElement.style.opacity = 1
  // Sumir a resposta após 3 segundos
  setTimeout(function () {
    respostaElement.style.opacity = 0 //Fazendo a resposta sumir
    buttonPerguntar.removeAttribute('disabled') //Após 3 segundos o botão fica liberado para fazer uma nova pergunta
  }, 3000) //Primeiro argumento é uma função | Segundo argumento é o tempo em milissegundos
}
