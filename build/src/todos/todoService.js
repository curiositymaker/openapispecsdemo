"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            description: "Mocked Todo ",
            done: false,
            title: "Mocked Todo Title",
        };
    }
    create(todoCreationParams) {
        return {
            id: 1,
            description: todoCreationParams.description,
            title: todoCreationParams.title,
            done: false,
        };
    }
}
exports.TodoService = TodoService;
