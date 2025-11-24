import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent {
@Input()


listaProductos:any [] = []



eliminarProductos(index:number){
  this.listaProductos.splice(index,1)

}
}
