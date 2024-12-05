import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  link: any = 'https://rickandmortyapi.com/api/character?';
  arrayOfLinks: any[] = [];
  pages: number = 42;
  cards: any[] = [];
  currentPage: number = 1;
  filterSpecies: any[] = [];
  filterGender: any[] = [];
  filterLocation: any[] = ['male','female'];
  searchSpecies: string[] = [];
  searchLocation: string[] = [];
  searchGender: string[] = [];
  hitsPerPage: string = '';

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getCards20();
  }
  // nn:boolean=true
  // nnn:string=''
  checknn(value: any, checkbox: any) {
    this.http.get(`${this.link}`).subscribe((data: any) => {
      if (checkbox.checked == true) {
        this.link += 'gender=male';
        console.log(this.link);
        this.cards=[]
        this.getCards20();
      } else {
        // this.link  'gender=male';
      }
      // console.log(this.nn);
      // console.log(this.nnn);
    });
  }
  getCards20() {
    console.log(this.link);
    
    this.http.get(`${this.link}`).subscribe((data: any) => {
      for (let cards of data.results) {
        this.cards.push(cards);
        // console.log(cards);
      }
    });
  }
  getCards40() {
    this.http
      .get(
        `https://rickandmortyapi.com/api/character?page=${this.currentPage++}`
      )
      .subscribe((data: any) => {
        for (let cards of data.results) {
          this.cards.push(cards);
          // console.log(cards);
        }
      });
  }
  getCards60() {
    this.http
      .get(
        `https://rickandmortyapi.com/api/character?page=${(this.currentPage += 2)}`
      )
      .subscribe((data: any) => {
        for (let cards of data.results) {
          this.cards.push(cards);
          // console.log(cards);
        }
      });
  }
  // getfilters() {
  //   //page count
  //   this.http
  //     .get(`https://rickandmortyapi.com/api/character?`)
  //     .subscribe((data: any) => {
  //       this.pages = data.info.pages;
  //     });
  //   //get all characters data
  //   for (let i = 1; i <= this.pages; i++) {
  //     this.http.get(`${this.link}?page=${i}`).subscribe((data: any) => {
  //       for (let result of data.results) {
  //         this.searchSpecies.push(result.species);
  //         this.searchGender.push(result.gender);
  //         this.searchLocation.push(result.location.name);
  //         this.searchSpecies = [...new Set(this.searchSpecies)];
  //         this.searchGender = [...new Set(this.searchGender)];
  //         this.searchLocation = [...new Set(this.searchLocation)];
  //       }
  //       for (let species of this.searchSpecies) {
  //         this.http
  //           .get(`${this.link}?species=${species}`)
  //           .subscribe((dataa: any) => {
  //             let info: any = {
  //               species: species,
  //               count: dataa.info.count,
  //               characters: dataa.results,
  //             };
  //             this.filterSpecies.push(info);
  //             this.filterSpecies = this.filterSpecies.filter(
  //               (item, index, self) =>
  //                 index === self.findIndex((t) => t.species === item.species)
  //             );
  //           });
  //       }
  //       for (let gender of this.searchGender) {
  //         this.http
  //           .get(`https://rickandmortyapi.com/api/character?gender=${gender}`)
  //           .subscribe((dataa: any) => {
  //             let info: any = {
  //               gender: gender,
  //               count: dataa.info.count,
  //               characters: dataa.results,
  //             };
  //             this.filterGender.push(info);
  //             this.filterGender = this.filterGender.filter(
  //               (item, index, self) =>
  //                 index === self.findIndex((t) => t.gender === item.gender)
  //             );
  //           });
  //       }
  //       for (let location of this.searchLocation) {
  //         this.http
  //           .get(`https://rickandmortyapi.com/api/character?gender=${gender}`)
  //           .subscribe((dataa: any) => {
  //             let info: any = {
  //               location: location,
  //               count: dataa.info.count,
  //               characters: dataa.results,
  //             };
  //             this.filterGender.push(info);
  //             this.filterGender = this.filterGender.filter(
  //               (item, index, self) =>
  //                 index === self.findIndex((t) => t.gender === item.gender)
  //             );
  //           });
  //       }
  //     });
  //   }
  // }
  checked: number = 0;
  checkbox(input: any) {
    if (input.checked == true) {
      this.checked++;
    } else {
      this.checked--;
    }
  }
  clearFilters() {
    // input.checked = false;
  }
}
