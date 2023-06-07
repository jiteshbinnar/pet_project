import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { studentModel } from '../studentModel';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements AfterViewInit{

studentInfo:studentModel=new studentModel()

  updateStudent= new  FormGroup({
    id:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("([A-Z][a-z]{0,} )([A-Z][a-z]{0,} )([A-Z][a-z]{0,})")]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^(0|91)?[7-9][0-9]{9}")]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_+&*-]+(?:\\."+
    "[a-zA-Z0-9_+&*-]+)*@" +
    "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
    "A-Z]{2,7}$")]),
    Marks:new FormControl('',[Validators.required,Validators.pattern("^[(0-9]{1,2}[.][0-9]{2}")]),
    resume:new FormControl(''),
    stream:new FormControl(''),
  })


  StudentData!: any[];

  searchStudentData:string="";

//  @Input()
//   searchingStudent!: string;

// add(){
//   console.log(this.searchingStudent);
  
// }
 
student:any=[]

  constructor(private api:ApiService,private router:Router) {}
 
   
  ngAfterViewInit(): void {
    
  }

  // @ViewChild(AppComponent)
  // stu!: AppComponent;

  // searchingStudent:any=this.stu.searchStudent;
  

  ngOnInit(): void {
  this.getAllStudents();

  this.api.search.subscribe((res:any)=>{
    this.searchStudentData=res;
  })
  }
getAllStudents(){
  this.api.getAllStudent().subscribe(d=>{
    this.student=d;
    console.log(this.student);
    // localStorage.setItem('StudentData', JSON.stringify(this.student));

    // let data=localStorage.getItem('studentData')
    //    this.StudentData=JSON.parse(this.student)
    
    
        })
}
 
  editStudent(row:any){
    this.updateStudent.controls['id'].setValue(row.id)
    this.updateStudent.controls['name'].setValue(row.name)
    this.updateStudent.controls['phoneNumber'].setValue(row.phoneNumber)
    this.updateStudent.controls['email'].setValue(row.email)
    this.updateStudent.controls['Marks'].setValue(row.Marks)
    this.updateStudent.controls['resume'].setValue(row.resume)
    this.updateStudent.controls['stream'].setValue(row.stream)
  }


  
// setProductEdit(update:studentModel){
//   this.studentInfo.email=update.email
//   this.studentInfo.phoneNumber=update.phoneNumber

// }



  updatingStudent(){

 this.studentInfo.id=this.updateStudent.value.id;
this.studentInfo.name=this.updateStudent.value.name;
this.studentInfo.phoneNumber=this.updateStudent.value.phoneNumber;
this.studentInfo.email=this.updateStudent.value.email;
this.studentInfo.Marks=this.updateStudent.value.Marks;
this.studentInfo.resume=this.updateStudent.value.resume;
this.studentInfo.stream=this.updateStudent.value.stream;
    this.api.updateStudent(this.studentInfo)
    .subscribe(d=>{
       alert('Info Updated Successfully')
    let ref=document.getElementById('cancel');
    ref?.click();
    this.updateStudent.reset();
    this.getAllStudents();       

    
        
    })
}


  deleteStudent(data:any){
   
    this.api.deleteStudent(data.id).subscribe(d=>{
      alert('student information deleted successfully')
      this.getAllStudents()
    })

  }

  get name(){
    return this.updateStudent.get('name');
   }
   get email(){
    return this.updateStudent.get('email');
   }

   get phoneNumber(){
    return this.updateStudent.get('phoneNumber');
   }

   get Marks(){
    return this.updateStudent.get('Marks');
   }


 
  
}
