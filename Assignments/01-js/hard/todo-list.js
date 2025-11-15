/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  // Add a new todo
  add(todo) {
    this.todos.push(todo);
  }

  // Remove a todo by index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      throw new Error("Invalid index: No todo found at this position.");
    }
  }

  // Update a todo by index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error("Invalid index: Cannot update non-existent todo.");
    }
  }

  // Get all todos
  getAll() {
    return [...this.todos]; // return a copy
  }

  // Get a single todo by index
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      throw new Error("Invalid index: No todo found at this position.");
    }
  }

  // Clear all todos
  clear() {
    this.todos = [];
  }
}
