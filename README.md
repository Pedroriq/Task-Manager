# Gerenciador de Tarefas (Task Manager)

Pedro Henrique de Souza - 1721 - GEC
Pedro Henrique Rocha Silveira - 70 - GES

Este é um simples gerenciador de tarefas (task manager) desenvolvido em JavaScript. Ele permite que você crie, visualize, atualize o status e remova tarefas de uma lista.

## Funcionalidades Principais

1. **Adicionar Tarefa**: Você pode adicionar uma nova tarefa fornecendo um título, uma descrição e um status válido (A fazer, Em andamento ou Concluída). Caso os dados fornecidos sejam inválidos, você receberá uma mensagem de erro.

2. **Visualizar Tarefas**: Você pode visualizar a lista de todas as tarefas cadastradas no gerenciador.

3. **Atualizar Status**: Você pode atualizar o status de uma tarefa existente fornecendo o título da tarefa e um novo status válido. O sistema informará se a operação foi bem-sucedida ou se a tarefa não foi encontrada.

4. **Remover Tarefa**: Você pode remover uma tarefa fornecendo o título da tarefa. A tarefa será removida da lista.

## Uso

Para utilizar o gerenciador de tarefas, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório:
https://github.com/Pedroriq/Task-Manager

3. Navegue até a pasta do projeto:
cd Task-Manager/src

4. Instale as dependências usando o npm:
npm install

5. Inicie o programa:
node task-manager.js

6. Você será apresentado a um menu com opções para adicionar, visualizar, atualizar e remover tarefas. Siga as instruções no console para interagir com o gerenciador de tarefas.

## Testes

O projeto inclui testes unitários para garantir o bom funcionamento do código. Para executar os testes, siga estas etapas:

1. Certifique-se de que as dependências estejam instaladas (veja a etapa 4 acima).

2. Execute o seguinte comando:
nom install chai mocha

## Estrutura do Código

- `task-manager.js`: O arquivo principal que contém a lógica de interação com o usuário e arquivo que define as classes `Task` e `TaskList` para gerenciar tarefas.
- `task-manager.test.js`: O arquivo de teste que utiliza o framework Mocha e a biblioteca Chai para testar as funcionalidades do gerenciador de tarefas.
