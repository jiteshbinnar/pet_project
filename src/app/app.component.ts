import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-info';
  
  searchStudent: string="";

constructor(private api: ApiService){

}

search(event:any)
{
  this.searchStudent = (event.target as HTMLInputElement).value;
  console.log(this.searchStudent);
  this.api.search.next(this.searchStudent)
  
}


}
