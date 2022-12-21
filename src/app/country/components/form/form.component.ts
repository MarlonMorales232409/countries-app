import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output() onEnter = new EventEmitter<string>()

  query: string = ''

  onSearch(){
    this.onEnter.emit(this.query)
  }

}
