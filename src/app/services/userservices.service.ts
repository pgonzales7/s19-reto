import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Root } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http:HttpClient) { }

  
  apireto19 = environment.apireto19
  

  getreto19(){
    return this.http.get<Root>(this.apireto19)
  }

}