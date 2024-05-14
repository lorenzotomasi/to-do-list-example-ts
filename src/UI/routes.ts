import { RouteObject, createBrowserRouter } from "react-router-dom";
import ToDoKanbanPageView from "./views/ToDoKanban/ToDoKanbanPageView";
import ToDoTablePageView from "./views/ToDoTable/ToDoTablePageView";
import MainContent from "./widgets/layout/MainContent";
import { routesPath } from "../constants";

interface RouteType {
  path: string;
  Component: React.ComponentType;
}

const routesObj: RouteObject[] = [
  {
    path: routesPath["/"],
    Component: MainContent,
    children: [
      {
        path: routesPath.table,
        Component: ToDoTablePageView
      },
      {
        path: routesPath["/"],
        Component: ToDoTablePageView
      },
      {
        Component: ToDoKanbanPageView,
        path: routesPath.kanban,
      }
    ]
  },
];

const routes = createBrowserRouter(routesObj)

export type { RouteType };
export { routes };
