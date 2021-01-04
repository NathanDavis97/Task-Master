import { ProxyState } from "../AppState.js";
import Task from "../Models/TaskModel.js";
import { saveState } from "../Utils/LocalStorage.js";


class TaskService {
  deleteTask(taskId) {
    var result = confirm("Are you sure you want to delete this item?");
    if (result) {
      ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.id != taskId)
    }

  }
  countchecked() {
    console.log(document.querySelectorAll('input[name=taskcheck]:checked').length
    );
  }
  createTask(newTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
    console.log('creating  task in service')
  }

  constructor() {
    ProxyState.on("tasks", saveState)
  }
}

export const taskService = new TaskService()