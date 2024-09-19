import { Component } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  constructor(private calculadoraService:CalculadoraService){}

  number1: number = 0;
  number2: number = 0;
  result: number = 0;


  somatoria(a: number, b:number){
    return this.result = this.calculadoraService.somar(this.number1, this.number2);
  }

  diminuir(a: number, b:number){
    return this.result = this.calculadoraService.subtrair(this.number1, this.number2);
  }

  divisao(a: number, b:number){
    return this.result = this.calculadoraService.dividir(this.number1, this.number2);
  }

  multiplicacao(a: number, b:number){
    return this.result = this.calculadoraService.multiplicar(this.number1, this.number2);
  }

}
