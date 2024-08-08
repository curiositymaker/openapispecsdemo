import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: number): Todo {
    return {
      id: todoId,
      description: "Mocked Todo ",
      done: false,
      title: "Mocked Todo Title",
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    return {
      id: 1,
      description: todoCreationParams.description,
      title: todoCreationParams.title,
      done: false,
    };
  }
}
