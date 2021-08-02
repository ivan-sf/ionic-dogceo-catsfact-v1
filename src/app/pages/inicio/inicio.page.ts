import { Component, OnInit } from '@angular/core';

interface Componente{
  name:string,
  path:string,
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[]=[
    {
      name:'Dogs random',
      path:'dogs'
    },
    {
      name:'Catsfact',
      path:'cats'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
