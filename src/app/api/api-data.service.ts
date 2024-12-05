import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  mainApiUrl: string = 'https://rickandmortyapi.com/api/character?';
  locationUrl: string = 'https://rickandmortyapi.com/api/location?';

  constructor(private http: HttpClient) {}
  getInfo() {
    this.http.get(this.mainApiUrl).subscribe((data: any) => {});
    
    //
  }
}
