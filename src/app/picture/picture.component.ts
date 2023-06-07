import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  mypicture:any
  institutePicture:any
  
  constructor(private apis:ApisService, private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')

    this.route.paramMap.subscribe((params:ParamMap)=>{
         
      let id=params.get('id')
         this.institutePicture=id

    })

    this.apis.getInstitutes(this.institutePicture).subscribe(d=>{
      
      this.mypicture=d

    })

  }

}
