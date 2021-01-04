import { generateId } from "../Utils/GenerateId.js"


export default class Task {
  constructor({ title, listId, color, id }) {
    this.title = title
    this.id = id || generateId()
    this.listId = listId
    this.color = color
    this.checked = false
  }
  get Template() {
    return /*html*/`<div> <label class="form-check-label ">
      <input class="form-check-input" name="taskcheck" id="" type="checkbox" style="background-color: ${this.color}" value="checkedValue"
        aria-label="Text for screen reader">
        <p class="card-title">${this.title}
        <i class="text-right fa fa-trash" onclick="app.TaskController.deleteTask('${this.id}')" aria-hidden="true"></i>
      </p>
        </label></div>`
  }
}