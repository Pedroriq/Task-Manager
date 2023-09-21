class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

class TaskList{
    constructor() {
        this.tasks = []
    }

    addTaskToList(task) {
        this.tasks.push(task)
    }
    
    viewTasks() {
        console.log(this.tasks)
    }
}

const taskList = new TaskList()

const readLine = require('readline');

const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
})

function createTask() {
    return new Promise((resolve, reject) => {
      rl.question('Titulo: ', (title) => {
        rl.question('Descricao: ', (description) => {
          rl.question('Status: ', (status) => {
            const task = new Task(title, description, status);
            resolve(task);
          });
        });
      });
    });
  }

function getMenuChoice() {
    displayMenu();
    rl.question('Escolha uma opção: ', (option) => {
        menu(option);
    });
}

function displayMenu() {
    console.log("1. Adicionar nova tarefa");
    console.log("2. Visualizar tarefas");
    console.log("3. Atualizar status");
    console.log("4. Excluir tarefa");
    console.log("5. Sair do programa");
}

function menu(option, callback) {
    switch (option) {
        case '1':
            createTask().then((newTask) => {
                taskList.addTaskToList(newTask);
                callback(); // Call the callback to display the menu again
            });
            break;
        case '2':
            taskList.viewTasks();
            callback(); 
            break;
        case '3':
            updateTask();
            callback(); 
            break;
        case '4':
            removeTask();
            callback(); 
            break;
    }
}

function startProgram() {
    displayMenu();
    rl.question('Escolha uma opção: ', (option) => {
        if (option === '5') {
            console.log('Saindo do programa.');
            rl.close();
        } 
        else {
            menu(option, startProgram);
        }
    });
  }
  
startProgram();