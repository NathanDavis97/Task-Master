import { ProxyState } from "../AppState.js";
import List from "../Models/ListModel.js";
import { saveState } from "../Utils/LocalStorage.js";




class ListService {
  deleteList(id) {
    var result = confirm("Are you sure you want to delete this item?");
    if (result) {
      ProxyState.lists = ProxyState.lists.filter(lists => lists.id != id)
    }

  }


  createlist(newlist) {
    let list = new List(newlist)
    ProxyState.lists = [...ProxyState.lists, list]
    console.log(ProxyState.lists)
  }

  constructor() {
    ProxyState.on("lists", saveState)
  }
}

export const listService = new ListService