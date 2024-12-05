import { Dispatch, createContext, useContext, useReducer } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
  nextId: number;
}

type TaskAction =
  | { type: "added"; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

interface TasksContextType {
  state: TasksState;
  dispatch: Dispatch<TaskAction>;
}

const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

const initialState: TasksState = {
  tasks: initialTasks,
  nextId: 3,
};

function tasksReducer(state: TasksState, payload: TaskAction) {
  switch (payload.type) {
    case "added": {
      return {
        tasks: [
          ...state.tasks,
          {
            id: state.nextId,
            text: payload.text,
            done: false,
          },
        ],
        nextId: state.nextId + 1,
      };
    }
    case "changed": {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === payload.task.id) {
            return payload.task;
          } else {
            return t;
          }
        }),
      };
    }
    case "deleted": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== payload.id),
      };
    }
    default: {
      throw Error("Unknown action: " + payload);
    }
  }
}

const TasksContext = createContext<TasksContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const value: TasksContextType = { state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (context === null) {
    throw new Error("useTasksContext must be used within a TaskProvider");
  }
  return context;
};
