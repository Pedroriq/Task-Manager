const { expect } = require('chai');
const { Task } = require('../src/task-manager');
const { TaskList } = require('../src/task-manager');

describe('Task Manager', () => {
  it('Adicionar nova tarefa', () => {
    const taskList = new TaskList();
    const task = new Task("Estudar M003", "Séries", "Em andamento")

    const Result = taskList.addTaskToList(task);
    expect(Result).to.equal(true);
  });

  it('Visualizar a lista de tarefas', () => {
    const taskList = new TaskList();
    const task = new Task("Estudar M003", "Séries", "Concluída")
    const task2 = new Task("Trabalho 1 - C214", "Fazer trabalho 1 de teste unitários da matéria de C214", "Em andamento")

    taskList.addTaskToList(task)
    taskList.addTaskToList(task2)

    listTasks = taskList.viewTasks()

    expect(listTasks[1].title).to.equal("Trabalho 1 - C214")
  })

  it('Atualizar o status de uma tarefa', () => {
    const taskList = new TaskList();
    const task = new Task("Fazer relatório de estágio", "Fazer o relatório de estágio para validação da matéria", "A fazer")
    const newStatus = "Em andamento"
    const titleChange = "Fazer relatório de estágio"
    let listTasks;

    taskList.addTaskToList(task);

    listTasks = taskList.viewTasks();

    expect(listTasks[0].status).to.equal('A fazer');

    const taskRight = taskList.tasks.find((task) => task.title === titleChange);
    taskList.updateTaskStatus(taskRight, newStatus)

    listTasks = taskList.viewTasks();
      //
    console.log(listTasks[0].status)
    expect(listTasks[0].status).to.equal('Em andamento')


  })

  it('Remover uma task',  () =>{
    const taskList = new TaskList()
    const task = new Task('Database connection', 'Realizar conexão o banco de dados mysql', 'Em andamento')

    taskList.addTaskToList(task);

    viewTasks = taskList.viewTasks()

    expect(viewTasks.length).to.equal(1)
    taskList.removeTask(task.title)

    expect(viewTasks.length).to.equal(0)

  });

});