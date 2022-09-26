import { Component, HostBinding, OnInit } from '@angular/core';

import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personajes: any = [];

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.personajeService.getPersonajes().subscribe(
      res => {
        this.personajes = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  delete(id: string){
    this.personajeService.deletePersonaje(id).subscribe(
      res => {
        console.log(res)
        this.getPersonajes();
      },
      err => console.error(err)
    )
  }

}
