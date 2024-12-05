import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function UseStateTodo() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Todo 1",
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);

  const [newTodo, setNewTodo] = React.useState({
    title: "",
    description: "",
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-foreground">
        Use State Todo Example
      </h1>

      <div className="mt-5 w-[600px] min-w-full">
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Title"
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            value={newTodo.title}
          />
          <Input
            placeholder="Description"
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
            value={newTodo.description}
          />

          <Button
            onClick={() => {
              setTodos((prev) => [
                ...prev,
                { ...newTodo, id: prev.length + 1 },
              ]);
            }}
          >
            Add
          </Button>
        </div>

        <div className="mt-2 space-y-2">
          {todos.map((todo) => (
            <Card key={todo.id}>
              <CardHeader className="text-sm font-semibold text-foreground">
                {todo.title}
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {todo.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
