import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient) {}
  arr:any='nika';
  // @Input() newItemEvent:any
  ngOnInit(): void {
this.http.get('https://rickandmortyapi.com/api/character').subscribe((data:any)=>{
this.arr=data

})
    // console.log(this.newItemEvent);
  }
  public title = 'project';
}
