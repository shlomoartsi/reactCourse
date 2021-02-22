
class IdAllocator{
    static Id = 1;
    static allocateNewId(){
        return this.Id++;
    }
}

class Todo {
      constructor(title) {
        this.id = IdAllocator.allocateNewId(),
        this.title = title,
        this.completed = false
    }
}

class Todolist {
    constructor() {
        this.todos = new Map();
        this.todoChangedEventName = "todoListChanged";
        this.todoChangedEvent = document.createElement("form");
        this._todoChangedEventCustomEvent = new CustomEvent(this.todoChangedEventName);
        this.todoOperations = {
            itemAdded: "Added",
            itemRemoved: "Removed",
            itemContentChanged: "Changed"
        }

    }

    addTodo(todo) {
        this.todos.set(todo.id, todo);
        this._todoChangedEventCustomEvent.todo = todo;
        this._todoChangedEventCustomEvent.action = this.todoOperations.itemAdded;
        this.todoChangedEvent.dispatchEvent(this._todoChangedEventCustomEvent);
    }

    removeTodo(todoId) {
        if (!this.todos.has(todoId)) return;
        let todo = this.todos.get(todoId);
        this.todos.delete(todoId);
        this._todoChangedEventCustomEvent.todo = todo;
        this._todoChangedEventCustomEvent.action = this.todoOperations.itemRemoved;
        this.todoChangedEvent.dispatchEvent(this._todoChangedEventCustomEvent);
    }

    toggleTodo(todoId) {
        if (this.todos.has(todoId)) {
            let todo = this.todos.get(todoId);
            todo.completed = !todo.completed;
        }

    }

    toggleAll() {
        this.todos.forEach(todo => {
            todo.completed = !todo.completed
        });
    }

}
