import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { instituteModel } from './institute';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private _urls='api/institute/'
  

  constructor(private http:HttpClient) { }

  getAllInstitutes():Observable<instituteModel[]>{
    return this.http.get<instituteModel[]>(this._urls)
 
  }


  getInstitutes(id:any){
    return this.http.get<instituteModel[]>(this._urls+id)
  }
}

