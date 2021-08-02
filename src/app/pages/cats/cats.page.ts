import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})


export class CatsPage implements OnInit {

  escucharClick(event:string){
    console.log(event)
  }

  cats;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://catfact.ninja/breeds?limit=1>')
      .subscribe(res=>{
        this.cats=res.data;
        console.log(this.cats)
      });
  }

}
