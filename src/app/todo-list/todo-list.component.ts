import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Todo} from "../common/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnChanges, OnInit {

  public todos: Todo[] = [];

  @Input()
  public newTodo: Todo;

  constructor() {
  }


  public ngOnChanges(changes: SimpleChanges): void {
    if (this.newTodo && this.checkTodo()) {
      this.todos.push(this.newTodo);
      this.toLocalStorage();
      this.newTodo = null;
      return;
    }
  }

  public ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('todos'))) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  public checkTodo(): boolean {
    let check = true;
    if (this.todos) {
      this.todos.forEach((todo: Todo) => {
        if (this.newTodo.name === todo.name) {
          alert('The todo already exist!!');
          return check = false;
        }
      });
    }
    return check;
  }

  public toLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public onClick(event: any, todo: Todo): void {
    if (event.target.localName === 'li') {
      todo.state = !todo.state;
      this.toLocalStorage();
    }
  }

  public onDelete(i: number): void {
    this.todos.splice(i, 1);
    this.toLocalStorage();
  }

  public takeDown(i: number): void {
    [this.todos[i], this.todos[i + 1]] = [this.todos[i + 1], this.todos[i]];
    this.toLocalStorage();
  }

  public takeUp(i: number): void {
    [this.todos[i], this.todos[i - 1]] = [this.todos[i - 1], this.todos[i]];
    this.toLocalStorage();
  }

  public onDrop(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    this.toLocalStorage();
  }

}
