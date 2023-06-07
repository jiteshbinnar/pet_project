import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-institute-name',
  templateUrl: './institute-name.component.html',
  styleUrls: ['./institute-name.component.css']
})
export class InstituteNameComponent implements OnInit {


  
  
  constructor(private apis:ApisService) { }
 


 allInstitues!: any[];

  ngOnInit(): void {
 
      this.apis.getAllInstitutes().subscribe
      (d=>{
       this.allInstitues=d
      })

     
    }




}
