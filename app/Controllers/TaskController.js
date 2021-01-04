import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js"



export default class TaskController {
  constructor() {
    console.log("task controller")
  }
  createTask(listId) {
    window.event.preventDefault()
    console.log("creating task")
    let form = window.event.target
    let newTask = {
      // @ts-ignore
      title: form.tasktitle.value,
      listId: listId,
      checked: false,
    }
    console.log(listId)
    console.log(newTask.title)
    taskService.createTask(newTask)
  }
  deleteTask(id) {
    console.log("delete Task")
    taskService.deleteTask(id)
  }
}