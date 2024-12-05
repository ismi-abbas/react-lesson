import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTasksContext } from "./TaskContext";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

interface TasksContextState {
  tasks: Task[];
  nextId: number;
}

interface TasksContextDispatch {
  (action: {
    type: "added" | "changed" | "deleted";
    text?: string;
    task?: Task;
    id?: number;
  }): void;
}

interface TasksContext {
  state: TasksContextState;
  dispatch: TasksContextDispatch;
}

export default function ContextWithReducer() {
  const {
    state: { tasks },
    dispatch,
  } = useTasksContext() as TasksContext;

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div className="w-full max-w-screen-sm mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function AddTask({ onAddTask }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div className="flex gap-3">
      <Input
        placeholder="Add task"
        value={text}
        className="flex-1"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </Button>
    </div>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => (
        <div key={task.id} className="border rounded-lg p-4 shadow-sm">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </div>
      ))}
    </ul>
  );
}

function Task({
  task,
  onChange,
  onDelete,
}: {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="flex flex-1 items-center gap-3 px-3">
        <Input
          value={task.text}
          className="flex-1"
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex flex-1 items-center justify-between px-3">
        <span className={task.done ? "line-through text-muted-foreground" : ""}>
          {task.text}
        </span>
        <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        checked={task.done}
        onCheckedChange={(checked) => {
          onChange({
            ...task,
            done: checked === true,
          });
        }}
      />
      {taskContent}
      <Button variant="destructive" size="sm" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  );
}
