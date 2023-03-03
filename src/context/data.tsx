import { createContext, Dispatch, useContext, useReducer } from "react";
import useLocalStorage from "use-local-storage";

// fontSize: 12,
// lineHeight: 28,
// textPosition: 36,
// textAlign: "center",
// color: "rgba(255, 255, 255, 0.9)",
// background: "rgba(255, 255,255, 0.1)",
// highlight: "mark",
// textAnimation: "fade-in",
// imageAnimation: "fade-in",
// overlay: true,
// cta: false,
// url: "",
// ctaText: "",
// paddingX: 20,
// paddingY: 10,

interface TemplateType {
  id: string;
  name: string;
  price: number;
}
const initialTasks: TemplateType[] = [
  {
    id: "0",
    name: "Template 1",
    price: 100,
  },
];
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "added",
  Changed = "changed",
  Delete = "delete",
}
type ProductPayload = {
  [Types.Create]: {
    id: string;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: string;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

const TasksContext = createContext<TemplateType[]>(initialTasks);

const TasksDispatchContext =
  createContext<Dispatch<ProductActions> | null>(null);

export function TasksProvider({ children }) {
  const [initTasks, setInitTasks] = useLocalStorage("template", initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks: TemplateType[], action: ProductActions) {
  switch (action.type) {
    case Types.Create: {
      return [
        ...tasks,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    }

    case Types.Delete: {
      return tasks.filter((t) => t.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}
