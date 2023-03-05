import { animationType } from "@/lib";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";

export interface TemplateType {
  id: string;
  name: string;
  fontSize: number;
  lineHeight: number;
  textPosition: number;
  textAlign: string;
  color: string;
  background: string;
  highlight: string;
  textAnimation: animationType;
  imageAnimation: animationType;
  overlay: boolean;
  cta: boolean;
  url: string;
  ctaText: string;
  paddingX: number;
  paddingY: number;
}
const initialTasks: TemplateType[] = [
  {
    id: "0_00-P715y8My3f3ijOZ1",
    name: "black and white",
    fontSize: 16,
    lineHeight: 20,
    textPosition: 36,
    textAlign: "center",
    color: "#ffffff",
    background: "#000000",
    highlight: "box",
    textAnimation: "fade-in",
    imageAnimation: "fade-in",
    overlay: false,
    cta: false,
    url: "",
    ctaText: "",
    paddingX: 10,
    paddingY: 20,
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
  Init = "init",
}
type ProductPayload = {
  [Types.Create]: TemplateType;
  [Types.Delete]: {
    id: string;
  };
  [Types.Init]: TemplateType[] | null;
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const TasksContext = createContext<TemplateType[]>(initialTasks);

export const TasksDispatchContext = createContext<Dispatch<ProductActions>>(
  () => null
);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("template") || "")) {
      dispatch({
        type: Types.Init,
        payload: JSON.parse(localStorage.getItem("template") || " "),
      });
    }
  }, []);

  useEffect(() => {
    if (tasks !== initialTasks) {
      console.log("this is called", tasks);
      localStorage.setItem("template", JSON.stringify(tasks));
    }
  }, [tasks]);

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
      const {
        id,
        name,
        fontSize,
        lineHeight,
        textPosition,
        textAlign,
        color,
        background,
        highlight,
        textAnimation,
        imageAnimation,
        overlay,
        cta,
        url,
        ctaText,
        paddingX,
        paddingY,
      } = action.payload;
      return [
        ...tasks,
        {
          id,
          name,
          fontSize,
          lineHeight,
          textPosition,
          textAlign,
          color,
          background,
          highlight,
          textAnimation,
          imageAnimation,
          overlay,
          cta,
          url,
          ctaText,
          paddingX,
          paddingY,
        },
      ];
    }
    case Types.Delete: {
      return tasks.filter((t) => t.id !== action.payload.id);
    }
    case Types.Init: {
      if (action.payload !== null) {
        console.log("this is the first action is called", action.payload);
        return action.payload;
      }
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}
