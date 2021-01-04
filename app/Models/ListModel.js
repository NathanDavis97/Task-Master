import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class List {
  constructor({ title, color, id }) {
    this.title = title
    this.id = id || generateId()
    this.color = color
  }


  get template() {
    return  /*html*/`
  <div class="card col-12 col-md-3  mt-2 ">
    <div class="card-header row justify-content-between " style="background-color: ${this.color}">
      <h5 class="col-6 text-left">${this.title}</h5>
      <i class="fa fa-trash col-1 offset-4"onclick="app.ListController.deleteList('${this.id}')" aria-hidden="true"></i>

      
       <p class="col-12"> ${this.Tasks.length}</p>
      
     
    </div>
    <div class="card-body row align-items-center ">
      <div class=" form-check">
        ${this.Tasks}
         </div>
      </div>
      <div class="card-footer text-muted row" >
        <form onsubmit="app.TaskController.createTask('${this.id}', '${this.color}')" required>
          <div class="form-group">
            <input type="text"  minlength="3" maxlength = "50" class="form-control" name="tasktitle" id="tasktitle" aria-describedby="helpId"
                placeholder="Task Name" required>
                <button class="btn btn-success"type="submit">Create</button>
                </div>
                </form>
                </div>
      </div>
  </div>`}

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}
