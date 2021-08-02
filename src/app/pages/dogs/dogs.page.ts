import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {
  constructor(
    private http:HttpClient
  ) { }
  
  dogs:any=[];
    
    reload(){
      console.log('Hi w')
    }

  ngOnInit() {
    this.http.get<any>("https://dog.ceo/api/breeds/image/random")
      .subscribe((res:any)=>{
        this.dogs = res.message
        console.log(this.dogs)
      })
  }


}
