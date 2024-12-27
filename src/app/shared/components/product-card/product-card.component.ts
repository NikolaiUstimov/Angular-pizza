import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {ProductType} from "../../../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent {
  //Принимаем продукт родительского компонента из цикла
  @Input() product: ProductType;
  //Отдаём событие по клику в родительский компонент
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  //Получаем экземпляр дочернего компонента title и сохраняем в переменную
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    //Это надёжный вариант инициализации product-card
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

}
