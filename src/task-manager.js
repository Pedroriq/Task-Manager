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

    updateTaskStatus() {
        return new Promise((resolve, reject) => {
            rl.question('Entre com o titulo da tarefa a ser atualizada: ', (title) => {
                const task = this.tasks.find((task) => task.title === title);
                if (task) {
                    rl.question('Entre com o novo status: ', (newStatus) => {
                    task.status = newStatus;
                    resolve(); // Resolve the promise when done
                    });
                } else {
                    console.log(`Tarefa com o título '${title}' não encontrada.`);
                    resolve(); // Resolve the promise even if the task is not found
                }
            });
        });
    }

    removeTask(title) {
        return new Promise((resolve, reject) => {
            const index = this.tasks.findIndex((task) => task.title === title);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            } else {
                console.log(`Tarefa com título '${title}' não encontrada.`);
            }
            resolve(); // Resolve the promise whether the task was found or not
        });
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
      rl.question('Título: ', (title) => {
        rl.question('Descricao: ', (description) => {
          rl.question('Status: ', (status) => {
            const task = new Task(title, description, status);
            resolve(task);
          });
        });
      });
    });
}

function removeTask() {
    return new Promise((resolve, reject) => {
        rl.question('Entre com o título da tarefa que você deseja remover: ', (title) => {
            taskList.removeTask(title)
            resolve();
        });
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
            taskList.updateTaskStatus().then(() => {
                callback(); 
              });
            break;
        case '4':
            removeTask().then(() => {
                callback(); 
            }); 
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