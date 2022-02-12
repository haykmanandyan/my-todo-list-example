import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTodos]'
})
export class TodosDirective {

  constructor(private elRef: ElementRef) { }

}
