import { ToDoListBE } from "../DTO";
import { ToDoList } from "../models";
import { toDoBEToToDo } from "./toDoBEToToDo";

function toDoListBEToToDoList(list: ToDoListBE): ToDoList {
  return list.map(toDoBEToToDo)
}

export { toDoListBEToToDoList }