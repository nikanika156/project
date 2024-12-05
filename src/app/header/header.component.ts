import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  search: string = '';
  // @ViewChild('deleteText') deleteText!: ElementRef;
  data = [
    { id: 1, name: 'angular' },
    { id: 2, name: 'node' },
    { id: 3, name: 'next' },
    { id: 4, name: 'vue' },
    { id: 5, name: 'react' },
  ];
  constructor(private shareData:SharedataService) {}
  ngOnInit() {
    // this.deleteTxtBtn();
    // console.log(this.deleteText.nativeElement);
    // if(this.search!=''){
      // console.log('nikaa');
      // }
      
     this.emitter();
    }
    emitter(){
      this.shareData.searchEmitter.subscribe(x =>{
        // console.log(x);
        
      })

    }
    deleteTxtBtn() {
    // console.log(this.deleteText);
    
    // if(this.deleteText.nativeElement)
    // let deleteTxtBtn = document.querySelector('.deleteText')
    // let deleteTxt = document.getElementById('deleteTxtBtn');
    // console.log(deleteText);
    // console.log(deleteTxt.style);
    // if(this.search!=''){
    // }
  }
}
