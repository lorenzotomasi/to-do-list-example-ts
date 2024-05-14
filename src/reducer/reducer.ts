import { ToDo, ToDoList } from "../models";

interface State {
  completedTask: number[];
  toDoTask: number[];
  taskRecord: Record<number, ToDo>;
}

interface Action {
  type: "TOGGLE_TO_DO_STATUS";
  action: { taskId: number };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_TO_DO_STATUS": {
      const newTaskStatus: boolean =
        !state.taskRecord[action.action.taskId]?.completed;
      const newTaskRecord: Record<number, ToDo> = {
        ...state.taskRecord,
        [action.action.taskId]: {
          ...state.taskRecord[action.action.taskId],
          completed: newTaskStatus,
        },
      };
      const completedTask: number[] = [];
      const toDoTask: number[] = [];
      for (const task of Object.values(newTaskRecord)) {
        if(task.completed) {
          completedTask.push(task.id)
        } else {
          toDoTask.push(task.id)
        }
      }
      return {
        taskRecord: newTaskRecord,
        completedTask,
        toDoTask
      };
    }
    default: {
      return state;
    }
  }
}

function initReducer(toDoList: ToDoList): State {
  const toDoTask: number[] = []
  const completedTask: number[] = [];
  for (const toDo of toDoList) {
    if(toDo.completed) {
      completedTask.push(toDo.id);
    } else {
      toDoTask.push(toDo.id)
    }

  }

  const toDoRecord: Record<number, ToDo> = toDoList.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: curr }),
    {}
  );

  return {
    completedTask,
    taskRecord: toDoRecord,
    toDoTask
  };
}

export { reducer, initReducer };
