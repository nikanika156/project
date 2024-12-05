import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor() { }
  @Output() searchEmitter:EventEmitter<any>= new EventEmitter();
}
