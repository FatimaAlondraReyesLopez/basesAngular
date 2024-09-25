import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit{
  distanciaPuntos!:FormGroup;
  resultado:number=0!
  constructor(){}
  ngOnInit(): void {
    this.distanciaPuntos=new FormGroup({
      CoordenadaX1: new FormControl('', Validators.required),
      CoordenadaY1: new FormControl('', Validators.required),
      CoordenadaX2: new FormControl('', Validators.required),
      CoordenadaY2: new FormControl('', Validators.required)
    });
  }

  calcDistancia():void{
    const CoordenadaX1=this.distanciaPuntos.get('CoordenadaX1')?.value;
    const CoordenadaY1=this.distanciaPuntos.get('CoordenadaY1')?.value;
    const CoordenadaX2=this.distanciaPuntos.get('CoordenadaX2')?.value;
    const CoordenadaY2=this.distanciaPuntos.get('CoordenadaY2')?.value;
    this.resultado = Math.sqrt(Math.pow((CoordenadaX2 - CoordenadaX1),2) + Math.pow((CoordenadaY2 - CoordenadaY1),2));
  }

}



