import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { StudentInfoComponent } from '../student-info/student-info.component';
@Component({
  selector: 'app-add-student-info',
  templateUrl: './add-student-info.component.html',
  styleUrls: ['./add-student-info.component.css']
})
export class AddStudentInfoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
     //^[0-9]{1,2}+[.][(0-9*)]{1,4}$
  }
  addStudent=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_+&*-]+(?:\\."+
    "[a-zA-Z0-9_+&*-]+)*@" +
    "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
    "A-Z]{2,7}$")]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^(0|91)?[7-9][0-9]{9}")]),
    name:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("([A-Z][a-z]{0,} )([A-Z][a-z]{0,} )([A-Z][a-z]{0,})")]),
    Marks:new FormControl('',[Validators.required,Validators.pattern("^[(0-9]{1,2}[.][0-9]{2}")]),
    resume:new FormControl('',[Validators.required]),
    stream:new FormControl('',[Validators.required])
  })
  constructor(private api:ApiService) { }
 

  @ViewChild(StudentInfoComponent)
  studentInfoRef!: StudentInfoComponent;


 

  saveStudent(){


    return this.api.addStudent(this.addStudent.value).subscribe(d=>
      {
     this.studentInfoRef?.student.push(d)
     alert('Student information added successfully')
     this.addStudent.reset();
     console.log(d);
     
     
     
        
      })
 
  }

     get name(){
      return this.addStudent.get('name');
     }
     get email(){
      return this.addStudent.get('email');
     }

     get phoneNumber(){
      return this.addStudent.get('phoneNumber');
     }

     get Marks(){
      return this.addStudent.get('Marks');
     }


     get resume(){
      return this.addStudent.get('resume');
     }


     get stream(){
      return this.addStudent.get('stream');
     }





}    
