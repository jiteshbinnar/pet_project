import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { studentModel } from './studentModel';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const student:any[] = [
      
       
    ];
    
      const institute:any[]=[
  {id:11,picture:'StarWood University',location:'Kolkata'},
  {id:12, picture:'Beckman Institute',location:'Bengaluru'},
  {id:13, picture:'HighImpact Institute',location:'Hyderabad'},
  {id:14, picture:'Apex Institute',location:'New Delhi'},
  {id:15, picture:'ProWeb Institute',location:'Pune'},
  {id:16, picture:'PalmTree Institute',location:'Mumbai'},
  ];

    return {student,institute};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: studentModel[]): any {
    return students.length > 0 ? Math.max(...students.map(stu=> stu.id)) + 1 : 11;
  }
}