import { ToDoBE } from "../DTO";
import { ToDo } from "../models";

function toDoBEToToDo(toDo: ToDoBE): ToDo {
  return {
    completed: toDo.completed,
    id: toDo.id,
    title: toDo.title,
    userId: toDo.userId
  }
}

export { toDoBEToToDo }