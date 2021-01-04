import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";



function _draw() {
  console.log("drawing");
  let template = ""
  ProxyState.lists.forEach(t => template += t.template)
  document.getElementById("lists").innerHTML = template
}

export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("tasks", _draw)
    ProxyState.on("checked", _draw)

    _draw()
  }
  createList() {
    window.event.preventDefault()
    let form = window.event.target

    let newlist = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      color: form.color.value
    }
    // @ts-ignore
    form.reset()

    console.log(newlist)
    listService.createlist(newlist)
  }
  deleteList(id) {
    listService.deleteList(id)

  }


} 