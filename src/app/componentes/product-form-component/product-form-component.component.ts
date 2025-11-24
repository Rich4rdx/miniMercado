import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form-component.component.html',
  styleUrls: ['./product-form-component.component.scss']
})
export class ProductFormComponentComponent {

  @Output()
  productCreate = new EventEmitter<any>()
  nombreProducto:String = "";
  precioProducto:number= 0

   

    

    agregarProducto(){
       if (this.nombreProducto.trim() != ""  && this.precioProducto > 0) {

        const nuevoProducto = {
          nombre:this.nombreProducto.trim(),
          precio:this.precioProducto

        }

        this.productCreate.emit(nuevoProducto)

        this.nombreProducto = ""
        this.precioProducto = 0
        
       }
    }
}
