import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { studentModel } from './studentModel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private _url='api/student/'
  // postUrl="http://localhost:3000/users";

  public search =new BehaviorSubject<string>("");


  constructor(private http:HttpClient) { }

 
  // saveUser(data:any){
  //   return this.http.post<any>(this.postUrl,data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // getUser(){
  //   return this.http.get<any>(this.postUrl)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getAllStudent():Observable<studentModel[]>{
return this.http.get<studentModel[]>(this._url)

}
addStudent(data:any){
  return this.http.post<studentModel[]>(this._url,data)
}

getUser(id:any){
  return this.http.get<studentModel[]>(this._url+id)
}

updateStudent(data:any)
{
   return this.http.put<studentModel[]>(`${this._url}${data.id}`,data)

}

deleteStudent(id:any){
  return this.http.delete<studentModel[]>(this._url+id)
}
}
