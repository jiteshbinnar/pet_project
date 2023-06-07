import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { data } from 'jquery';
import { isEmpty } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-details-of-student',
  templateUrl: './details-of-student.component.html',
  styleUrls: ['./details-of-student.component.css']
})
export class DetailsOfStudentComponent implements OnInit {


studentData:any;
  studentId: any;

  constructor(private route:ActivatedRoute, private api:ApiService,private router:Router) { }
 


    ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.studentId=id
    })




       this.api.getUser(this.studentId).subscribe(student=>{
        
        this.studentData=student;

        
        
  })
  }

  goNext(){


 let nextId= parseInt(this.studentId) + (1);



      this.router.navigate(['/getStudentInfo',nextId])
    
    this.api.getUser(nextId).subscribe(student=>{
            
      this.studentData=student;
   
     
      
    })
      

  }

  goPrevious(){
  
  let previousId= parseInt(this.studentId) - (1);
  if(previousId===11 || previousId>11){
  this.router.navigate(['/getStudentInfo',previousId])

  this.api.getUser(previousId).subscribe(student=>{
        
    this.studentData=student;
  
  })
  
  }

  else
  {
    console.log('invalid url');
    
  }
}
}


