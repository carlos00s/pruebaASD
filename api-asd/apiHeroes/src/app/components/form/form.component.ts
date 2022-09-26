import { Component, HostBinding, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personaje';
import { PersonajesService } from '../../services/personajes.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  personaje: Personajes = {
    id: 0,
    alias: '',
    nombre:'',
    inclinacion : '',
    grupo: '',
    lugarOperacion: '',
    condicion: '',
    tipoPoder: '',
    vehiculo: 0,
    tipoVehiculo: '',
    imagen:''
  };
  edit: boolean = false;

  constructor(private personajeService: PersonajesService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRouter.snapshot.params;
    console.log(params['id']);
    if(params['id']){
      this.personajeService.getPersonaje(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.personaje = res;
          this.edit = true; 
        },
        err => console.error(err)
      );
    }
  }
  agregar(){
    delete this.personaje.id;
    this.personajeService.postPersonaje(this.personaje).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/personajes'])
      },
      err => console.error(err)
    )
  }
  update(){
    this.personajeService.putPersonaje(this.personaje.id, this.personaje)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/personajes'])
      },
      err => console.error(err)
    )
  }

}
