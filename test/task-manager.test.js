const { expect } = require('chai');
const { Task } = require('../src/task-manager');
const { TaskList } = require('../src/task-manager');

describe('Task Manager', () => {
  it('Adicionar nova tarefa', () => {
    const taskList = new TaskList();
    const task = {title:"Estudar M003", description:"Séries", status:"Em andamento"}

    const Result = taskList.addTaskToList(task);
    expect(Result).to.equal(true);
  });
  it('Adicionar nova tarefa com tarefa null', () => {
    const taskList = new TaskList();
    const task = null

    const Result = taskList.addTaskToList(task);
    expect(Result).to.equal(false);
  });
  it('Verificar se status é válido', () => {
    const newTask = new Task("Lavar louça", "Talheres e Panelas", "A fazer");
    verifyStatus = newTask.setStatus("A fazer")
    expect(verifyStatus).to.equal(true);
  });
});