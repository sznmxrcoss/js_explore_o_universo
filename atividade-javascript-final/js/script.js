/*
    Atividade: Painel de Tarefas Escolares
 
    Escreva aqui o código JavaScript para programar os recursos da página.
*/
 
const tarefas = document.querySelectorAll(".tarefa")
const contador = document.querySelector("#contador-tarefas")
console.log(contador);
 
function atualizarContador() {
    let concluidas = 0
    tarefas.forEach(function (tarefa) {
 
        if (tarefa.classList.contains("tarefa-concluida")) {
            concluidas++
        }
    })
    contador.textContent = concluidas + " de " + tarefas.length + " tarefas concluídas"
}
 
tarefas.forEach(function (tarefa) {
 
    const indicador = tarefa.querySelector(".indicador-estado")
    const botao = tarefa.querySelector(".botao-avancar")
 
    botao.addEventListener("click", function () {
 
        const estado = indicador.textContent.trim();
        tarefa.classList.remove(
            "tarefa-pendente",
            "tarefa-andamento",
            "tarefa-concluida"
        )
 
        indicador.classList.remove(
            "estado-pendente",
            "estado-andamento",
            "estado-concluida"
        )
 
        if (estado === "Pendente") {
            tarefa.classList.add("tarefa-andamento")
            indicador.classList.add("estado-andamento")
            indicador.textContent = ("Em andamento")
            botao.textContent = ("Concluir tarefa")
        }
 
        else if (estado === "Em andamento") {
            tarefa.classList.add("tarefa-concluida")
            indicador.classList.add("estado-concluida")
            indicador.textContent = ("Concluída")
            botao.textContent = ("Recomeçar tarefa")
            atualizarContador()
        }
 
        else {
            tarefa.classList.add("tarefa-pendente")
            indicador.classList.add("estado-pendente")
            indicador.textContent = ("Pendente")
            botao.textContent = ("Iniciar tarefa")
        }
    })
}) //Fechamento do forEach
 
const frases = [
    'Grandes aprendizados começam com pequenos passos.',
    'Cada exercício é uma oportunidade de descobrir algo novo.',
    'Com dedicação e prática, você chega mais longe.',
    'Errar faz parte do caminho de quem está aprendendo.',
    'Uma tarefa de cada vez: seu esforço está construindo resultados.',
    'Continue curioso e celebre cada progresso nos estudos.'
]
 
const botaoMotivacao = document.querySelector("#botao-motivacao")
const mensagem = document.querySelector("#mensagem-motivacional")
 
botaoMotivacao.addEventListener("click", function(){
    const indice = Math.floor(Math.random() *frases.length)
    mensagem.textContent = frases[indice]
})
 