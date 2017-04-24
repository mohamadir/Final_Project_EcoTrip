import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class Trips {

  constructor(public http: Http) {
    console.log('Hello Trips Provider');
  }



  search(searchForm): Observable<any>{
  	return this.http.get('http://localhost:8000/api/search');
  }

}
