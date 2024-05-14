import axios from "axios";
import { ToDoList } from "../../models";
import { TODO_BASE_URL } from "../config";
import { ToDoListBE } from "../../DTO";
import { toDoListBEToToDoList } from "../../mappers";

function getToDoList(): Promise<ToDoList> {
  return axios.get<ToDoListBE>(`${TODO_BASE_URL}/todos`).then((result) => toDoListBEToToDoList(result.data)).catch((error) => {
    throw new Error(`getToDoList fetch error: ${error}`)
  })
}

export { getToDoList }