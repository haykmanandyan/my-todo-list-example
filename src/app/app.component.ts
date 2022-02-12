import {Component, ElementRef, ViewChild} from '@angular/core';
import {Todo} from "./common/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public addedTodo: Todo;

  title = 'my-dropdown';

  public addTodo(todo: Todo): void {
    this.addedTodo = todo;
  }
}
