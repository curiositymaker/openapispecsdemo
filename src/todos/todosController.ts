import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoService, TodoCreationParams } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: number) {
    let todoService = new TodoService();
    return todoService.get(todoId);
  }
}
