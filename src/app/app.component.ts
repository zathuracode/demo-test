import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-test';
  myVar ='Hola Mundo'
  saludo=' Hola Diego'

  public sumar(n1:number, n2:number ):number{
    return n1+n2;
  }

  public isPar(numero:number):boolean{
    return numero%2==0?true:false;
  }

}
