import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  @Output() onEnter = new EventEmitter<string>()
  @Output() onDebounce = new EventEmitter<string>()

  @Input() placeholder:string = ''
  
  query: string = ''

  debouncer: Subject<string> = new Subject()
  
  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( (value)=> {
      this.onDebounce.emit(value)
    })
  }

  onSearch(){
    this.onEnter.emit(this.query)
  }

  onPressedKey(){
    this.debouncer.next(this.query)
  }

}
