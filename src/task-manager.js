class Task {

    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

}



const readLine = require('readline');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tasks = []

function createTask(){
    r1.question('Titulo: ', (title) =>{
        r1.question('Descricao: ', (description) =>{
            r1.question('Status:', (status)=>{
                const task = new Task(title, description, status)
                tasks.push(task)
            })
        })
    })
}

function viewTasks(){
    console.log('-'.repeat(55))
    console.log('|     FILMES     |     DESCRICAO     |     STATUS     |')
    for (let i = 0; i < tasks.length; i += 1){
        const titleString = tasks[i].title;
        const descriptionString = tasks[i].description;
        const statusString = tasks[i].status;
        console.log('| ')
    }
}

function showMenu() {
    console.log('\n1. Adicionar nova tarefa')
    console.log('2. Visualizar tarefas')
    console.log('3. Atualizar status')
    console.log('4. Excluir tarefa')
}

function input(option) {
    switch (option) {
        case 1:
            createTask();
            return start();
        case 2:
            viewTasks();
            break;
        case 3:
            updateTask();
            break;
        case 4:
            removeTask();
            break;
    }
}

function start() {
    showMenu()
    r1.question('Escolha uma opcao', (option) => {
        input
    })
}