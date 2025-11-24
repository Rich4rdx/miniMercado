import { Component, Input } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })

  
export class AppComponent {

 
  title = 'miniCatalogo';

  productos:Product[] = []

  agregarProducto(nuevoProducto:Product){
    this.productos.push(nuevoProducto)
  }
}
