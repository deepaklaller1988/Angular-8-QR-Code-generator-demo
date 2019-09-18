import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';

import {catchError} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class GeneralService {
  api ="https://restcountries.eu/rest/v2/all"
handleError;

// data = "assets/download.jpg"

  constructor(private http : HttpClient) {}


getData(){
 return this.http.get(this.api)
}
}

