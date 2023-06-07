import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], searchingStudent:string, proName:string): any[]{
   
    const result:any=[];
    if(!value || searchingStudent==='' || proName==='' )
{
    return value;
  }
   value.forEach((a:any)=>{
    if(a[proName]?.trim().toLowerCase().includes(searchingStudent.toLowerCase())){
       result.push(a);
    }
   });
   return result;
  
}}












// if(!value || !studentName){
//   return value
// }

// return value.filter(a=>
//   a.firstname.toLowerCase().indexOf(studentName.toLowerCase()!==1)
//   )


    // if(studentName==='')
    // {
    //   return value;
    // }
    // const studentList:any[]=[];

    // for(let i=0;i<=value.length;i++){
    //   let student:any=value[i].;
    //   if(student.includes(studentName)){
    //     studentList.push(value[i]);
    //   }
    // }
    // return studentList;


//  if(value.length===0  || searchingStudent===''){
//   return value;
//  }
//  const student=[];
//  for(const data of value)
//  {
//   if(data['name']===searchingStudent){
//     student.push(data);
//   }
//  }