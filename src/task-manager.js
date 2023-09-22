class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = this.setStatus(status);
    }

    setStatus(status) {
        const allowedStatus = ["A fazer", "Em andamento", "Concluída"];
        if (allowedStatus.includes(status)) {
            this.status = status;
            return this.status;
        } else {
            throw new Error(`Status '${status}' não é válido. Use 'A fazer', 'Em andamento' ou 'Concluída'.`);
        }
    }
}

class TaskList{
    constructor() {
        this.tasks = []
    }

    addTaskToList(task) {
        let successfulOperation = false;
        if (task !== null) {
            this.tasks.push(task)
            successfulOperation = true;

            return successfulOperation;
        }
        return successfulOperation;
    }
    
    viewTasks() {
        console.log(this.tasks);
        return this.tasks;
    }



    updateTaskStatus(task, newStatus) {
        return new Promise((resolve, reject) => {
            const taskCerta = this.tasks.find((task) => task.title === task.title);
            try {
                taskCerta.setStatus(newStatus);
                resolve();
            } catch (error) {
                console.log(error.message);
                resolve();
            }
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
                    try {
                        const task = new Task(title, description, status);
                        resolve(task);
                    } catch (error) {
                        console.log(error.message);
                        resolve(null); // Resolve with null to indicate an invalid task
                    }
                });
            });
        });
    });
}

function removeTask(title) {
    return new Promise((resolve, reject) => {
            taskList.removeTask(title)
            resolve();
        });
}

function displayMenu() {
    console.log("\n1. Adicionar nova tarefa");
    console.log("2. Visualizar tarefas");
    console.log("3. Atualizar status");
    console.log("4. Excluir tarefa");
    console.log("5. Sair do programa\n");
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
            rl.question('Entre com o título da tarefa a ser atualizada: ', (title) => {
                const task = taskList.tasks.find((task) => task.title === title);
                if (task){
                    rl.question('Entre com o novo status: ', (newStatus) => {
                        taskList.updateTaskStatus(task, newStatus).then(() => {
                        callback();
                        });
                    });
                }else{
                    console.log(`Tarefa com o título '${title}' não encontrada.`);
                    resolve();
                }
            });
            break;
        case '4':
            rl.question('Entre com o título da tarefa a ser removida: ', (title) => {
                removeTask(title).then(() => {
                    callback();
                });
            })

            break;
        case '5':
            console.log('Saindo do programa!');
            rl.close();
            break;
        default:
            console.log('Escolha inválida. Por favor, selecione uma opção válida.');
            callback(); 
            break;
    }
}

function startProgram() {
    displayMenu();
    rl.question('Escolha uma opção: ', (option) => {
        if (option === '5') {
            console.log('Saindo do programa!');
            rl.close();
        } 
        else {
            menu(option, startProgram);
        }
    });
  }
  
startProgram();

module.exports.Task = Task;
module.exports.TaskList = TaskList;