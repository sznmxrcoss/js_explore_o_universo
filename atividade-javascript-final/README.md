# Dicas de JavaScript: Painel de Tarefas

O HTML e o CSS já estão prontos. Programe os recursos no arquivo `js/script.js`.

## 1. Selecione os elementos

Use `document.querySelector()` para selecionar um elemento pelo `id` e `document.querySelectorAll()` para selecionar todos os elementos que usam uma classe.

Elementos importantes já identificados no HTML:

- `#contador-tarefas`: texto com o total de tarefas concluídas.
- `.tarefa`: cards das tarefas.
- `.indicador-estado`: texto do estado dentro de cada card.
- `.botao-avancar`: botão de cada tarefa.
- `#botao-motivacao`: botão da mensagem motivacional.
- `#mensagem-motivacional`: parágrafo que mostra a mensagem.

Lembrete: `#` seleciona por `id`; `.` seleciona por classe.

## 2. Reaja aos cliques

O método `addEventListener("click", function () { ... })` permite executar instruções quando alguém clica em um botão.

Cada botão de tarefa deve alterar somente o card ao qual pertence. Dentro do `forEach`, use `tarefa.querySelector()` para encontrar o indicador e o botão daquele card.

## 3. Alterne os estados

Os cards usam estas classes para representar os estados:

| Estado | Classe do card | Classe do indicador | Texto do indicador | Texto do botão |
|---|---|---|---|---|
| Pendente | `tarefa-pendente` | `estado-pendente` | Pendente | Iniciar tarefa |
| Em andamento | `tarefa-andamento` | `estado-andamento` | Em andamento | Concluir tarefa |
| Concluída | `tarefa-concluida` | `estado-concluida` | Concluída | Recomeçar tarefa |

Use `classList.contains()` para descobrir o estado atual, `classList.remove()` para retirar as classes antigas e `classList.add()` para aplicar a nova. Atualize os textos com a propriedade `textContent`.

O ciclo esperado é: **Pendente → Em andamento → Concluída → Pendente**.

## 4. Atualize o contador

Percorra a lista de cards com `forEach`. Para cada card, verifique se ele tem a classe `tarefa-concluida`. Conte quantas tarefas atendem à condição e atualize o `textContent` de `#contador-tarefas`.

O HTML começa com uma tarefa concluída. Ao carregar a página, faça o contador refletir o estado inicial. Atualize-o novamente depois de cada clique em um botão de tarefa.

## 5. Mostre uma mensagem aleatória

Crie uma lista (array) com algumas frases motivacionais. No clique do botão, gere um índice aleatório usando `Math.random()` e `Math.floor()`, e use esse índice para escolher uma frase da lista.

Você pode usar estas frases:

- Grandes aprendizados começam com pequenos passos.
- Cada exercício é uma oportunidade de descobrir algo novo.
- Com dedicação e prática, você chega mais longe.
- Errar faz parte do caminho de quem está aprendendo.
- Uma tarefa de cada vez: seu esforço está construindo resultados.
- Continue curioso e celebre cada progresso nos estudos.

## Sugestões para trabalhar

- Programe um recurso de cada vez e confira no navegador.
- Abra o console do navegador (F12) se algo não funcionar; mensagens de erro ajudam a localizar o problema.
- Confira se os nomes das classes no JavaScript correspondem exatamente aos nomes do HTML e do CSS.
- Você pode usar `++` para acrescentar 1 a uma variável contadora.
- Não é necessário alterar o HTML nem o CSS.



const tarefas = document.querySelectorAll(".tarefa");
const contador = document.querySelector("#contador-tarefas");

// Mudar o estado das tarefas
tarefas.forEach(function(tarefa) {
    const botao = tarefa.querySelector(".botao-avancar");
    const estado = tarefa.querySelector(".indicador-estado");

    botao.onclick = function() {
        if (tarefa.classList.contains("tarefa-pendente")) {
            tarefa.className = "tarefa tarefa-andamento";
            estado.className = "indicador-estado estado-andamento";
            estado.textContent = "Em andamento";
            botao.textContent = "Concluir tarefa";

        } else if (tarefa.classList.contains("tarefa-andamento")) {
            tarefa.className = "tarefa tarefa-concluida";
            estado.className = "indicador-estado estado-concluida";
            estado.textContent = "Concluída";
            botao.textContent = "Recomeçar tarefa";

        } else {
            tarefa.className = "tarefa tarefa-pendente";
            estado.className = "indicador-estado estado-pendente";
            estado.textContent = "Pendente";
            botao.textContent = "Iniciar tarefa";
        }

        // Atualizar o contador
        const concluidas = document.querySelectorAll(".tarefa-concluida").length;
        contador.textContent = concluidas + " de 4 tarefas concluídas";
    };
});

// Exibir mensagens motivacionais
const botaoMensagem = document.querySelector("#botao-motivacao");
const mensagem = document.querySelector("#mensagem-motivacional");

botaoMensagem.onclick = function() {
    const frases = [
        "Continue tentando!",
        "Cada tarefa concluída é uma conquista!",
        "Você está evoluindo!",
        "Não desista dos seus objetivos!",
        "Pequenos passos levam a grandes resultados!"
    ];

    const numero = Math.floor(Math.random() * frases.length);
    mensagem.textContent = frases[numero];
};
