import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  location: any = '';
  species: any = '';
  gender: any = '';
  currentPage: number = 1;
  link: string = `https://rickandmortyapi.com/api/character?page=${this.currentPage}`;
  arrayOfLinks: any[] = [];
  pages: number = 0;
  locationPages: number = 0;
  cards: any[] = [];
  filterSpecies: any[] = [];
  filterGender: any[] = [];
  filterLocation: any[] = ['male', 'female'];
  searchSpecies: string[] = [];
  searchLocation: string[] = [];
  searchGender: string[] = [];
  hitsPerPage: string = '';
  httpFinish: boolean = false;
  emitCards: any = this.shareData.searchEmitter.emit(this.cards);
  mmm: string = '';
  locationPagesArr: any = [];
  constructor(private http: HttpClient, private shareData: SharedataService) {}
  ngOnInit() {
    // this.checknn()
    this.getCards20();
    this.getfiltersName();
    // this.emit();
  }
  emit() {
    this.shareData.searchEmitter.emit(this.cards);
  }

  checknn(value: any, checked: any) {
    this.gender = `&gender=${value.innerText}`;
    this.http
      .get(`${this.link}${this.gender}${this.location}${this.species}`)
      .subscribe((data: any) => {
        console.log(data);

        this.cards = [];
        this.cards = data.results;
        this.shareData.searchEmitter.emit(this.cards);
      });
  }
  getCards20() {
    this.http.get(`${this.link}`).subscribe((data: any) => {
      this.cards = [];
      this.cards = data.results;
      // console.log(this.cards);
      this.shareData.searchEmitter.emit(this.cards);
    });
  }
  async getfiltersName() {
    //   //page count
    this.http
      .get(`https://rickandmortyapi.com/api/character?`)
      .subscribe((data: any) => {
        this.pages = data.info.pages;
        for (let i = 1; i <= this.pages; i++) {
          // console.log(`https://rickandmortyapi.com/api/character?page=${i}`);
        }
      });
    //
    //
    this.http
      .get(`https://rickandmortyapi.com/api/location?`)
      .subscribe((data: any) => {
        this.locationPages = data.info.pages;
      });
    for (let i = 1; i <= this.locationPages; i++) {
      this.locationPagesArr.push(
        `https://rickandmortyapi.com/api/location?page=${i}`
      );
    }
    for (let j of this.locationPagesArr) {
      console.log(j);
    }
  }
  filterss() {
    console.log('nika');

    for (let location of this.searchLocation) {
      if (this.httpFinish == true) {
        console.log(this.searchLocation);
      }
    }
  }
}
