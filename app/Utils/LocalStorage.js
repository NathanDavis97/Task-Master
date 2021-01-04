import { ProxyState } from "../AppState.js";
import List from "../Models/ListModel.js";
import Task from "../Models/TaskModel.js";



export function saveState() {
  localStorage.setItem("listData", JSON.stringify({ lists: ProxyState.lists, tasks: ProxyState.tasks }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("listData"))
  if (data) {
    console.log(data, "data1")
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
  }
}