import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../common/todo.model";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  public inputText: string;

  @Output()
  public sendText = new EventEmitter<Todo>();


  constructor() {
  }

  public ngOnInit(): void {
  }

  public addTodo(text: string): void {
    if (typeof(text) === "string" && text.trim().length) {
      this.sendText.emit(
        {
          name: text,
          state: false
        }
      );
      this.inputText = '';
      return;
    }
    alert("it's empty, try again!!")
  }
}

